function flatten(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const array = arr[i];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      result.push(element);
    }
  }
  return result;
}

const FinalArr = flatten([["a"], [1, 2, 3, 4, 5], ["c", "d"]]);
console.log(FinalArr);
//flatten([[1], [2], [3], [4]])
//flatten([["a", "b"], ["c", "d"]])
