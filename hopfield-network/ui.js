import Vue from 'https://unpkg.com/vue@2.6.0/dist/vue.esm.browser.min.js';
import _ from './utils.mjs';
import HopfieldNetwork from './hopfield-network-class.mjs';

const plotElement = window.document.getElementById('plot');
const size = 20;
const hopfieldNetwork = new HopfieldNetwork(size * size);
const nodes = [];
const indexes = [];
let smile = null;
$.get('smile.json', (data) => {
    smile = data;
});
const data = {
    edge: _.range(size),
    indexes: indexes,
    simulatedAnnealing: false,
    tMax: 5.0,
    tMin: 0.01,
    tStep: 0.01,
    withSteps: true,
};
let k = 0;
for (let i of _.range(size)) {
    indexes.push([]);
    for (let j of _.range(size)) {
        const node = {
            i: k,
            val: -1,
        };
        nodes.push(node);
        indexes[i][j] = node;
        k++;
    }
}
/*
const nonRepeated = (m1) => {
    const equal = () => {}
    for (let i = 0; i++; i < m1.length - 1) {
        if (equal(m1
    }
};
*/
const memorize = function () {
    if (nodes.filter((n) => n.val !== -1).length === 0) {
        alert('Nothing to memorize!');
    } else {
        const input = nodes.map((n) => n.val);
        hopfieldNetwork.memorize(input);
    }
};
const clear = function () {
    for (let node of nodes) {
        node.val = -1;
    }
};
const draw = (pattern) => {
    for (let i of _.range(pattern.length)) {
        nodes[i].val = pattern[i];
    }
};
const recall = function () {
    const input = nodes.map((n) => n.val);
    const range = data.simulatedAnnealing
        ? [data.tMax, data.tMin, data.tStep]
        : null;
    if (range && range.length > 0 && range[0] < range[1]) {
        alert('Invalid Temperature Settings');
    }
    const steps = hopfieldNetwork.recall(input, range);
    //draw(memory);
    let i = 0;
    let energyValues = [];
    const interval = window.setInterval(() => {
        draw(steps[i].state);
        energyValues.push(steps[i].energy);
        if (energyValues.length > 50) {
            energyValues.shift();
        }
        window.Plotly.newPlot(plotElement, [
            {
                x: _.range(energyValues.length),
                y: energyValues,
            },
        ]);
        i++;
        if (i === steps.length) {
            window.clearInterval(interval);
            console.log(energyValues[energyValues.length - 1]);
        }
    }, 24);
};
const clearHalf = () => {
    for (let i of _.range(indexes.length)) {
        for (let j of _.range(indexes[0].length)) {
            if (j < Math.floor(size / 2)) {
                indexes[i][j].val = -1;
            }
        }
    }
};
const print = () => {
    console.log(nodes.map((n) => n.val));
};
const reset = function () {
    hopfieldNetwork.reset();
    clear();
};
const drawSmile = () => {};
new Vue({
    el: '#app',
    data: data,
    methods: {
        memorize,
        clear,
        recall,
        reset,
        clearHalf,
        print,
    },
});
