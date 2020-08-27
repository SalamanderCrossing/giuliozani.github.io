'use strict';
import _ from './utils.mjs'

const getWeightsMatrix = (input) => input.map((x, i)=>input.map((y,j)=>i === j ? 0 : y*x))
const addMatrices = (m1, m2) => m1.map((row, i) => row.map((val, j) => m1[i][j] + m2[i][j]))
const matrixByVector = (m, x) => m.map(row => sign(row.reduce((acc, val, i) => acc + val*x[i],0)))
const fire = (x, temperature) => {
	const t = 0.1
	const p = _.sigmoid(1/temperature*x)
	return Math.random() < p ? 1 : -1
}
const updateValues = _.tco((self, weights, x, indexes, temperature, changed = false) => {
	const i = indexes[0]
	const nextValue = fire(_.dot(weights[i], x), temperature)
	const nextChanged = changed || nextValue !== x[i];
	const nextX = _.set(x, i, nextValue)
	const nextIndexes = indexes.slice(1) 
        return nextIndexes.length === 0 ? [nextX, nextChanged] : self(weights, nextX, nextIndexes, nextChanged)
})
const recall = _.tco((self, weights, x, temperature=0.01) => {
	const indexes = _.shuffle(_.range(x.length))
	const [recalled, changed] = updateValues(weights, x, indexes)
	return changed ? self(weights, recalled, temperature) : recalled
})
const recallWithSimulatedAnnealing = _.tco((self, weights, x, startTemperature, endTemperature) => {
    const memory = recall(weights, x, startTemperature);
    return Math.abs(startTemperature - endTemperature) < 0.1 ? memory : self(weights, memory, startTemperature - 0.01, endTemperature)
})
const test = () => {
    const pattern1 = [-1, -1, -1, 1, 1, 1, 1]
    const pattern2 = [1, 1, 1, 1, 1, -1, -1]
    const weights1 = getWeightsMatrix(pattern1)
    const weights2 = getWeightsMatrix(pattern2)
    const weights = addMatrices(weights1, weights2)
    //const cue = [-1, -1, 1, 1, 1, 1, 1]
    const cue = [1, 1, 1, 1, 1, 1, -1]
    const recalled = recall(weights, cue)

    console.log(recalled)
}

export {getWeightsMatrix, addMatrices, recall, recallWithSimulatedAnnealing}
