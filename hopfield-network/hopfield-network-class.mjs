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
    recall(cue, simulatedAnnealing){
        if (!this.memorized){
            throw 'nothing memorized!'
        }
        return simulatedAnnealing ?
            recallWithSimulatedAnnealing(this.weights, cue, 5, 0.01) :
            recall(this.weights, cue, temperature)
    }
    reset(){
        this.weights = _.zeros(this.nodeCount, this.nodeCount)
    }
}

export default HopfieldNetwork
