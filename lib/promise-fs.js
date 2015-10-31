'use strict';

// method chain
function taskA() {
  console.log("TaskA");
  throw new Error("Throw Error @ task A")
}

function taskB() {
  console.log("TaskB");
}

function onRejected(error) {
  console.log("Catch Error: A or B", error);
}

function finalTask() {
  console.log("Final Task");
}

var promise = Promise.resolve();
promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected)
  .then(finalTask);

// method 
function doubleUp(value) {
  return value * 2
}

function increment(value) {
  return value + 1;
}

function output(value) {
  console.log('return value is ', value);
}

var promise1 = Promise.resolve(1);
promise1
  .then(increment)
  .then(doubleUp)
  .then(output)
  .catch(function(error){
    console.log(error);
  });

