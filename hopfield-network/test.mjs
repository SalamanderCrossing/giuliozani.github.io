import _ from './utils.mjs';

const fire = (x, temperature) => {
    const p = _.sigmoid((1 / temperature) * x);
    console.log(p);
    return Math.random() < p ? 1 : -1;
};
console.log(fire(1000, 3000));


