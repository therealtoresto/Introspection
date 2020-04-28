`use strict`

const constructors = [Object, Array, Date, Error, Promise, Promise, Proxy, RegExp];
const output = constructors.map(ctr => ({
    name: ctr.name,
    type: typeof ctr,
    ctr,
}));
console.table(output);