'use strict';
const { threadId, workerData } = require('worker_threads');

if (!threadId === 1) process.exit(1);

const array = new Int32Array(workerData.buffer);

Atomics.store(array, 5, 45);

Atomics.notify(array, 5);
