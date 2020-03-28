export const accumulate = (arr, fn) => {

  if (arr.length === 1) {
    return [];
  }
  return arr.map((e) => fn(e));
};
