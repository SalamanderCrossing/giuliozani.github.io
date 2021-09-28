const range = (a, max = -Infinity) => {
    if (max == -Infinity) {
        max = a;
        a = 0;
    }
    return Array.from({ length: max - a }, (_, i) => a + i);
};
export default {
    range: range,
};
