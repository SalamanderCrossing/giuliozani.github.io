const range = (a: number, max = -Infinity): number[] => {
	if (max == -Infinity) {
		max = a;
		a = 0;
	}
	return Array.from({ length: max - a }, (_, i) => a + i);
};

export default {
	range: range,
};
