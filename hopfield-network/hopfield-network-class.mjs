import {getWeightsMatrix, addMatrices, recall, recallWithSimulatedAnnealing} from './stochastic-hopfield-network.mjs'
import _ from './utils.mjs'

class HopfieldNetwork{
    constructor(nodeCount = 25){
        this.nodeCount = nodeCount;
        this.reset()
    }
    memorize(pattern){
        this.memorized = true;
        if (pattern.length !== this.weights.length){
            throw 'wrong pattern size'
        }
        const newWeights = getWeightsMatrix(pattern)
        this.weights = addMatrices(this.weights, newWeights)
    }
    recall(cue, temperatureRange){
        if (!this.memorized){
            throw 'nothing memorized!'
        }
        return temperatureRange ?
            recallWithSimulatedAnnealing(this.weights, cue, temperatureRange[0], temperatureRange[1], temperatureRange[2]) :
            recall(this.weights, cue)
    }
    reset(){
        this.weights = _.zeros(this.nodeCount, this.nodeCount)
    }
}

export default HopfieldNetwork
