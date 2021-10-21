import { randomGenomes, getFitnesses, selectBest, getArgMax, getChildren, } from "./evolve.js";
const main = async () => {
    const mutationRate = 0.01;
    const mutationImpact = 0.05;
    const survivalThreshold = 0.3;
    const generationCount = 20;
    const populationSize = 100;
    const threadCount = 13;
    let population = randomGenomes(populationSize);
    let fitnesses = [];
    const threads = new Array(threadCount).fill(0).map(() => new Worker(new URL("./get_fitness.js", import.meta.url).href, {
        type: "module",
    }));
    for (let generation = 0; generation < generationCount; generation++) {
        fitnesses = await getFitnesses(threads, population);
        const survivors = selectBest(population, fitnesses, survivalThreshold);
        const children = getChildren(survivors, mutationRate, mutationImpact);
        const novelIndividuals = randomGenomes(populationSize - (children.length + survivors.length));
        const argMax = getArgMax(fitnesses);
        console.log(fitnesses);
        console.log(`End of generation ${generation}\nFitness:${fitnesses[argMax]}\nGenome:\n${population[argMax]}`);
        population = [...survivors, ...children, ...novelIndividuals];
    }
    Deno.exit();
};
await main();
