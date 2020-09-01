import Vue from 'https://unpkg.com/vue@2.6.0/dist/vue.esm.browser.min.js';
import _ from './utils.mjs';
const $ = window.$;
import HopfieldNetwork from './hopfield-network-class.mjs';

const bodyHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
const bodyWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
const plotElement = window.document.getElementById('plot');
const size = 20;
const hopfieldNetwork = new HopfieldNetwork(size * size);
const nodes = [];
const indexes = [];
let smile = null;
let sad = null;
let angry = null;
let winking = null;
$('.show-on-plotting').hide();
$.get('smile.json', (data) => {
    smile = data;
});
$.get('sad.json', (data) => {
    sad = data;
});
$.get('angry.json', (data) => {
    angry = data;
});
$.get('winking.json', (data) => {
    winking = data;
});
const data = {
    edge: _.range(size),
    indexes: indexes,
    simulatedAnnealing: false,
    tMax: 60.0,
    tMin: 0.1,
    withSteps: true,
    showParameters: false,
    isPlotting: false,
    progress: 0,
    showPlot: false,
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
    window.document.getElementById('plot').innerText = '';
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
    data.showParameters = false;
    const input = nodes.map((n) => n.val);
    const range = data.simulatedAnnealing
        ? [data.tMax, data.tMin, data.tStep]
        : null;
    if (range && range.length > 0 && range[0] < range[1]) {
        alert('Invalid Temperature Settings');
    }

    const cutSteps = (steps) => {
        const energies = steps.map((s) => s.energy);
        const min = Math.min(...energies);
        const index = _.firstIndex(energies, min);
        return steps.slice(0, Math.min(steps.length - 1, index + 60));
    };
    const steps = cutSteps(hopfieldNetwork.recall(input, range));
    //draw(memory);
    const layout = {
        height: bodyHeight * 0.4,
        width: bodyWidth,
        // yaxis: {
        //    title: 'Energy',
        //},
        margin: {
            t: 4,
            b: 0,
        },
    };
    let i = 0;
    let energyValues = [];
    const xRange = _.range(50);
    const progressElement = window.document.getElementById('progress');
    $('.hide-on-plotting').hide();
    $('.show-on-plotting').show();
    data.showPlot = true;
    const interval = window.setInterval(
        () => {
            draw(steps[i].state);
            energyValues.push(steps[i].energy);
            if (energyValues.length > 50) {
                energyValues.shift();
            }
            window.Plotly.newPlot(
                plotElement,
                [
                    {
                        x: xRange,
                        y: energyValues,
                    },
                ],
                layout
            );
            i++;
            progressElement.innerText =
                _.roundTo((100 * i) / steps.length, 1) + '%';
            if (i === steps.length) {
                window.clearInterval(interval);
                console.log(energyValues[energyValues.length - 1]);
                window.Plotly.newPlot(
                    plotElement,
                    [
                        {
                            x: _.range(steps.length),
                            y: steps.map((s) => s.energy),
                        },
                    ],
                    layout
                );
                $('.show-on-plotting').hide();
                $('.hide-on-plotting').show();
            }
        },
        data.simulatedAnnealing ? 0.1 : 18
    );
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
const drawSmile = () => {
    draw(smile);
};
const drawSad = () => {
    draw(sad);
};
const drawAngry = () => {
    draw(angry);
};
const drawWinking = () => {
    draw(winking);
};
const toggleSimulatedAnnealing = () => {
    window.document.getElementById('plot').innerText = '';
    data.simulatedAnnealing = !data.simulatedAnnealing;
    data.showParameters = data.simulatedAnnealing;
};
new Vue({
    el: '#app',
    data: data,
    methods: {
        memorize,
        clear,
        recall,
        reset,
        clearHalf,
        drawSmile,
        print,
        drawSad,
        drawAngry,
        toggleSimulatedAnnealing,
        drawWinking,
        updateProgress: function () {
            this.progress;
        },
    },
});
