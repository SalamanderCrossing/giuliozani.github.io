import { randomGenomes, getFitnesses, selectBest, getArgMax, getChildren, } from "./evolve.js";
const main = async () => {
    const mutationRate = 0.01;
    const mutationImpact = 0.1;
    const survivalThreshold = 0.3;
    const generationCount = 30;
    const populationSize = 100;
    const threadCount = 16;
    let population = randomGenomes(populationSize);
    let fitnesses = [];
    const threads = new Array(threadCount).fill(0).map(() => new Worker(new URL("./get_fitness.js", import.meta.url).href, {
        type: "module",
    }));
    const history = [];
    for (let generation = 0; generation < generationCount; generation++) {
        fitnesses = await getFitnesses(threads, population);
        const survivors = selectBest(population, fitnesses, survivalThreshold);
        const children = getChildren(survivors, mutationRate, mutationImpact);
        const novelIndividuals = randomGenomes(populationSize - (children.length + survivors.length));
        const argMax = getArgMax(fitnesses);
        console.log(fitnesses.map(x => x).sort((x, y) => y - x));
        console.log(`End of generation ${generation}\nBest fitness:${fitnesses[argMax]}\nBest genome:\n${population[argMax]}\n`);
        history.push([fitnesses[argMax], population[argMax]]);
        await Deno.writeTextFile("./history.json", JSON.stringify(history));
        population = [...survivors, ...children, ...novelIndividuals];
    }
    Deno.exit();
};
await main();
