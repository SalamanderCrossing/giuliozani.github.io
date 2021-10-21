const validGenomeRanges = [
    [0, 100],
    [0, 100],
    [0, 500],
    [-100, 100],
];
const getArgMax = (values) => {
    let max = values[0];
    let maxI = 0;
    for (let i = 0; i < values.length; i++) {
        const val = values[i];
        if (val > max) {
            max = val;
            maxI = i;
        }
    }
    return maxI;
};
const argSort = (arr1, arr2, reverse = false) => arr1
    .map((item, index) => [arr2[index], item]) // add the args to sort by
    .sort(([arg1], [arg2]) => (reverse ? arg1 - arg2 : arg2 - arg1)) // sort by the args
    .map(([, item]) => item); // extract the sorted items
const random = (a, b) => Math.random() * (b - a) + a;
const randomGenomes = (count) => {
    return Array(count)
        .fill(0)
        .map(() => validGenomeRanges.map((x) => random(x[0], x[1])));
};
const clip = (val, min, max) => Math.min(max, Math.max(min, val));
const getSoldierCount = (grid) => {
    const result = [0, 0];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] === 1) {
                result[0] += 1;
            }
            else if (grid[i][j] === -1) {
                result[1] += 1;
            }
        }
    }
    return result;
};
const getMutation = (value, range, mutationImpact) => clip(value +
    Math.random() *
        mutationImpact *
        (range[1] - range[0]) *
        (Math.random() > 0.5 ? -1 : 1), range[0], range[1]);
const mutate = (genome, mutationRate, mutationImpact) => {
    return genome.map((x, i) => Math.random() <= mutationRate
        ? getMutation(x, validGenomeRanges[i], mutationImpact)
        : x);
};
const selectBest = (genomes, fitnesses, survivalThreshold = 0.3) => {
    const sortedGenomes = argSort(genomes, fitnesses);
    const topIndex = 1 - Math.round(survivalThreshold * genomes.length);
    return sortedGenomes.slice(topIndex);
};
const mate = (g1, g2, mutationRate, mutationImpact) => {
    return mutate(g1.map((_, i) => (Math.random() > 0.5 ? g1[i] : g2[i])), mutationRate, mutationImpact);
};
const getChildren = (genomes, mutationRate, mutationImpact) => {
    const children = new Array();
    for (let i = genomes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        children.push(mate(genomes[i], genomes[j], mutationRate, mutationImpact));
    }
    return children;
};
const getFitnesses = (threads, population) => new Promise((resolve, _reject) => {
    const fitnesses = new Array();
    let completed = 0;
    let sent = 0;
    for (let i = 0; i < threads.length; i++) {
        const thread = threads[i];
        const genome1 = population[sent];
        if (genome1 === undefined) {
            debugger;
        }
        thread.postMessage([genome1, sent]);
        sent += 1;
        thread.onmessage = (e) => {
            const [fitness, index] = e["data"];
            fitnesses[index] = fitness;
            completed += 1;
            if (sent < population.length) {
                const genome2 = population[sent];
                if (genome2 === undefined) {
                    debugger;
                }
                thread.postMessage([genome2, sent]);
                sent += 1;
            }
            else if (completed === population.length) {
                resolve(fitnesses);
            }
        };
    }
});
const test = () => {
    const genome1 = [92.12516746620518, 90.57038431176298, 118.79403536434208, 62.5708828774591];
    const genome2 = [9.140431535500282, 84.41403279296522, 492.7045822227587, -37.2708689358376];
    const offspring = mate(genome1, genome2, 0.01, 0.05);
    console.log(genome1);
    console.log(genome2);
    console.log(offspring);
};
export { selectBest, randomGenomes, getFitnesses, getChildren, getArgMax };
