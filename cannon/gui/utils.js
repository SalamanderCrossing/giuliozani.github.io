export default {
  range: (a, max=-Infinity) => {
    if (max == -Infinity){
      max = a
      a = 0
    }
    return Array.from({ length: max - a }, (x, i) => a + i)
  },
};
