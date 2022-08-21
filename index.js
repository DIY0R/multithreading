'use strict';

const { Worker, isMainThread } = require('worker_threads');

if (!isMainThread) process.exit(1);

const buffer = new SharedArrayBuffer(40);
const array = new Int32Array(buffer);

const spreader = new Worker(__dirname + '/spreader.js', {
  workerData: { buffer },
});
const worker = new Worker(__dirname + '/worker.js', {
  workerData: { buffer },
});

worker.on('message', (data) => {
  console.log(data);
});
