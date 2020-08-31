'use strict';
import _ from './utils.mjs';

const getWeightsMatrix = (input) =>
    input.map((x, i) => input.map((y, j) => (i === j ? 0 : y * x)));
const addMatrices = (m1, m2) =>
    m1.map((row, i) => row.map((val, j) => m1[i][j] + m2[i][j]));
const matrixByVector = (m, x) =>
    m.map((row) => _.sign(row.reduce((acc, val, i) => acc + val * x[i], 0)));
const energy = (x, w) =>
    (-1 / 2) *
    w.reduce(
        (acc1, row, i) =>
            acc1 + x[i] * row.reduce((acc2, el, j) => acc2 + w[i][j] * x[j], 0),
        0
    );
const fire = (x, temperature) => {
    const p = _.sigmoid((1 / temperature) * x);
    return Math.random() < p ? 1 : -1;
};
const updateValues = _.tco(
    (self, weights, x, indexes, temperature, steps, changed = false) => {
        const i = indexes[0];
        const nextValue = fire(_.dot(weights[i], x), temperature);
        const nextChanged = changed || nextValue !== x[i];
        const nextX = _.set(x, i, nextValue);
        const nextIndexes = indexes.slice(1);
        const nextSteps = _.append(steps, {
            state: nextX,
            energy: energy(nextX, weights),
            temperature: temperature,
        });
        return nextIndexes.length === 0
            ? [nextChanged, steps]
            : self(
                  weights,
                  nextX,
                  nextIndexes,
                  temperature,
                  nextSteps,
                  nextChanged
              );
    }
);
const recall = (weights, x) =>
    _recall(weights, 0.01, [
        {
            state: x,
            energy: energy(x, weights),
            temperature: 0.01,
        },
    ]);
const _recall = _.tco(
    (self, weights, temperature = 0.01, steps = [], maxReps = null, i = 0) => {
        const x = steps[steps.length - 1].state;
        const indexes = _.shuffle(_.range(x.length));
        const [changed, nextSteps] = updateValues(
            weights,
            x,
            indexes,
            temperature,
            steps
        );
        return changed && i !== maxReps
            ? self(weights, temperature, nextSteps, maxReps, i + 1)
            : nextSteps;
    }
);
const recallWithSimulatedAnnealing = (weights, x, tMax, tMin, tStep) =>
    _recallSimulatedAnnealing(weights, tMax, tMin, tStep, [
        {
            state: x,
            temperature: tMax,
            energy: energy(x, weights),
        },
    ]);
const _recallSimulatedAnnealing = _.tco(
    (self, weights, tMax, tMin, tStep, steps = []) => {
        console.log(tMax);
        const nextSteps = _recall(weights, tMax, steps, tMax > 5 ? 5 : null);
        return Math.abs(tMax - tMin) <= Math.abs(tMax / 2 - tMin)
            ? nextSteps
            : self(weights, tMax / 2, tMin, tStep, nextSteps);
    }
);
const test = () => {
    const pattern1 = [-1, -1, -1, 1, 1, 1, 1];
    const pattern2 = [1, 1, 1, 1, 1, -1, -1];
    const weights1 = getWeightsMatrix(pattern1);
    const weights2 = getWeightsMatrix(pattern2);
    const weights = addMatrices(weights1, weights2);
    //const cue = [-1, -1, 1, 1, 1, 1, 1]
    const cue = [1, 1, 1, 1, 1, 1, -1];
    const recalled = recall(weights, cue);

    console.log(recalled);
};

export { getWeightsMatrix, addMatrices, recall, recallWithSimulatedAnnealing };
