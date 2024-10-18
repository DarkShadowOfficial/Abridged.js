function For(action, start = 0, end, step = 1) {
  for (let i = start; i < end; i += step) {
    action(i);
  }
}
function Iter(action, object) {
  if (TYPE(object) == "object") {
    for (let i of Object.getOwnPropertyNames(object)) {
      action(i);
    }
  } else if (TYPE(object) == "array") {
    object.forEach((x) => action(x));
  }
}
function While(action, statement) {
  do {
    action();
  } while (statement);
}
function If(statement, action) {
  if (statement) {
    action();
  }
}
function IfElse(statement, action, alt_action) {
  if (statement) {
    action();
  } else {
    alt_action();
  }
}
function IfChain(statements, actions, alt_action) {
  for (let i = 0; i < statements.length; i++) {
    if (statements[i]) {
      actions[i]();
      return;
    }
  }
  alt_action();
}
const Log = console.log;
const XOR = (a, b) => (a || b) && !(a && b);
const OR = (a, b) => a || b;
const AND = (a, b) => a && b;
const NOT = (a) => !a;
const NOR = (a, b) => !OR(a, b);
const TYPE = (a) => (a.push ? "array" : typeof a);
Iter((i) => {
  globalThis[i] = Math[i];
}, Math);
const $ = (a) => document.querySelector(a);
const $$ = (a) => document.querySelectorAll(a);
function isEqual(a, b) {
  let ds = 0;
  if (TYPE(a) == TYPE(b)) {
    if (TYPE(a) == "object") {
      for (let i of Object.getOwnPropertyNames(a)) {
        if (a[i] != b[i]) {
          ds++;
        }
      }
      for (let i of Object.getOwnPropertyNames(b)) {
        if (a[i] != b[i]) {
          ds++;
        }
      }
      return NOT(ds > 0);
    } else if (TYPE(a) == "array") {
      For(
        (i) => {
          a[i] == b[i] ? (ds += 0) : ds++;
        },
        0,
        a.length
      );
      return NOT(ds > 0);
    } else {
      return a == b;
    }
  } else {
    return false;
  }
}
const str = (a) => JSON.stringify(a);
const int = (a) => {
  switch (TYPE(a)) {
    case "number":
      return floor(a);
    case "string":
      return parseInt(a);
    default:
      throw new TypeError("Cannot parse as int.");
  }
};
const float = (a) => {
  switch (TYPE(a)) {
    case "number":
      return a;
    case "string":
      return parseFloat(a);
    default:
      throw new TypeError("Cannot parse as float.");
  }
};
const rand = (min, max) => random() * (max - min) + min;
const roundTo = (x, nearest) => round(x / nearest) * nearest;
const convertBase = (x, base, toBase) =>
  int(parseInt(x, base).toString(toBase));
const filter = (A, f) => A.filter((x) => f(x));
const append = (A, item) => A.push(item);
const sort = (arr) => {
  // Code from Freecodecamp.org
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...sort(leftArr), pivot, ...sort(rightArr)];
};
function search(array, target) {
  // Code from my Jump Search Github Repo
  function linear(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) return i;
    }
    return -1;
  }
  let buckets = [];
  let arr = [...array];
  for (let i = -1; i <= sqrt(arr.length); i++) {
    buckets.push(arr.splice(0, sqrt(arr.length)));
  }
  buckets.push(arr);
  let current;
  let offset = 0;
  for (let i = 0; i < buckets.length; i++) {
    current = buckets[i].length - 1;
    if (buckets[i][buckets[i].length - 1] == target) return current + offset;
    else if (buckets[i][buckets[i].length - 1] > target) {
      return linear(buckets[i], target) + offset;
    }
    offset += buckets[i].length - 1;
  }
  return -1;
}
