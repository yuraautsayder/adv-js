'use strict';

const users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

function uniqueObjects(arr) {
  const seen = new Set();
  return arr.filter(obj => {
    const key = `${obj.id}:${obj.name}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

console.log(uniqueObjects(users));
