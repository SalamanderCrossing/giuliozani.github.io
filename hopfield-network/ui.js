import Vue from 'https://unpkg.com/vue@2.6.0/dist/vue.esm.browser.min.js';
import _ from './utils.mjs'
import HopfieldNetwork from './hopfield-network-class.mjs'

const size = 10
const hopfieldNetwork = new HopfieldNetwork(size*size)
const nodes = []
const indexes = []
const data = {
      edge: _.range(size),
      indexes: indexes,
      simulatedAnnealing:false,
      tMax: 5,
      tMin:0.01,
      tStep:0.01
    };
let k = 0;
for (let i of _.range(size)){
    indexes.push([])
    for (let j of _.range(size)){
        const node = {
            i: k,
            val: -1
        }
        nodes.push(node);
        indexes[i][j] = node;
        k++;
    }
}
const memorize = function() {
    const input = nodes.map(n => n.val)
    hopfieldNetwork.memorize(input)
}
const clear = function() {
    for (let node of nodes){
        node.val = -1
    }
}
const recall = function(){
    const input = nodes.map(n => n.val)
    const range = data.simulatedAnnealing ? [data.tMax, data.tMin, data.tStep] : null
    if (range && range.length > 0 && range[0] < range[1]){
        alert('Invalid Temperature Settings')
    }
    const memory = hopfieldNetwork.recall(input, range)
    for (let i of _.range(memory.length)){
        nodes[i].val = memory[i]
    }
}
const reset = function() {
    hopfieldNetwork.reset()
    clear()
}
var app = new Vue({
    el: '#app',
    data: data,
    methods:{
        memorize,
        clear,
        recall,
        reset
    }
})
