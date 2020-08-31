'use strict';
import _ from './utils.mjs';

const getWeightsMatrix = (input) =>
    input.map((x, i) => input.map((y, j) => (i === j ? 0 : y * x)));
const addMatrices = (m1, m2) =>
    m1.map((row, i) => row.map((val, j) => m1[i][j] + m2[i][j]));
const matrixByVector = (m, x) =>
    m.map((row) => _.sign(row.reduce((acc, val, i) => acc + val * x[i], 0)));
const energy = (x, w) => {
    return w.reduce(
        (acc1, row, i) =>
            acc1 + x[i] * row.reduce((acc2, el, j) => acc2 + w[i][j] * x[j], 0),
        0
    );
};
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
        return nextIndexes.length === 0
            ? [nextX, nextChanged, steps]
            : self(
                  weights,
                  nextX,
                  nextIndexes,
                  temperature,
                  _.append(steps, {
                      state: nextX,
                      energy: energy(nextX, weights),
                      temperature: temperature,
                  }),
                  nextChanged
              );
    }
);
const recall = _.tco(
    (self, weights, x, temperature = 0.01, withSteps = false, steps = []) => {
        const indexes = _.shuffle(_.range(x.length));
        const [recalled, changed, nextSteps] = updateValues(
            weights,
            x,
            indexes,
            temperature,
            steps
        );
        return changed
            ? self(weights, recalled, temperature, withSteps, nextSteps)
            : withSteps
            ? nextSteps
            : recalled;
    }
);
const recallWithSimulatedAnnealing = _.tco(
    (self, weights, x, tMax, tMin, tStep, withSteps = false, steps = []) => {
        const memory = recall(weights, x, tMax, withSteps);
        const nextSteps = withSteps ? steps.concat(memory) : steps;
        return Math.abs(tMax - tMin) <= 0.02
            ? withSteps
                ? steps
                : memory
            : self(
                  weights,
                  memory,
                  tMax - tStep,
                  tMin,
                  tStep,
                  withSteps,
                  nextSteps
              );
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
