'use strict';
const { workerData, parentPort } = require('worker_threads');
const array = new Int32Array(workerData.buffer);

Atomics.wait(array, 5, 0);

const factorial = (n, fact = 1) => {
  for (let i = 1; i <= n; i++) fact *= i;
  return fact;
};

parentPort.postMessage({ result: factorial(array[5]) });
