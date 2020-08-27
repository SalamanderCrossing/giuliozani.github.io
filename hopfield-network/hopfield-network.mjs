import _ from './utils.mjs'

const getWeightsMatrix = (input) => input.map((x, i)=>input.map((y,j)=>i === j ? 0 : y*x))
const addMatrices = (m1, m2) => m1.map((row, i) => row.map((val, j) => m1[i][j] + m2[i][j]))
const matrixByVector = (m, x) => m.map(row => sign(row.reduce((acc, val, i) => acc + val*x[i],0)))

const updateValues = _.tco((self, weights, x, indexes, changed = false) => {
	const i = indexes[0]
	const nextValue = _.sign(_.dot(weights[i], x))
	const nextChanged = changed || nextValue !== x[i];
	const nextX = _.set(x, i, nextValue)
	const nextIndexes = indexes.slice(1) 
        return nextIndexes.length === 0 ? [nextX, nextChanged] : self(weights, nextX, nextIndexes, nextChanged)
})
const recall = _.tco((self, weights, x) => {
	const indexes = _.shuffle(_.range(x.length))
	const [recalled, changed] = updateValues(weights, x, indexes)
	return changed ? self(weights, recalled) : recalled
})

const pattern1 = [-1, -1, -1, 1, 1, 1, 1]
const pattern2 = [1, 1, 1, 1, 1, -1, -1]
const weights1 = getWeightsMatrix(pattern1)
const weights2 = getWeightsMatrix(pattern2)
const weights = addMatrices(weights1, weights2)
//const cue = [-1, -1, 1, 1, 1, 1, 1]
const cue = [1, 1, 1, 1, 1, 1, -1]
const recalled = recall(weights, cue)

console.log(recalled)
