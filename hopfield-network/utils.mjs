const range = (i) => [...Array(i).keys()];

const shuffle = (x) => {
	const array = x.slice();
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const dot = (x, y) => x.reduce((acc, val, i) => acc + x[i]*y[i], 0)

const sign = x => x >= 0 ? 1 : -1

const tco = (func) => function (...args){
    const self = (...nextArgs) => {
        args = nextArgs;
    } 
    let result = undefined;
    while(! result){
        result = func(self, ...args)
    }
    return result
}

const set = (x, i, val) => {
	const y = x.slice()
	y[i] = val
	return y
}

const sigmoid = (x) => 1/(1+Math.exp(-x))

const zeros = (a, b=0) => {
    if (b === 0){
        return new Array(a).fill(0)
    }
    else{
        return (new Array(a).fill(0)).map(() => new Array(b).fill(0))
    }
}
export default {
	range,
	shuffle,
	dot,
	sign,
	tco,
	set,
	sigmoid,
    zeros
}
