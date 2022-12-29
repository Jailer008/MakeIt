function checkEquals(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  let i = 0;
  var condition = true;
  if (len1 == len2) {
    while (condition === true && i <= len2) {
      if (arr1[i] == arr2[i]) {
        condition = true;
      } else {
        condition = false;
      }
      i++;
    }
  } else {
    condition = false;
  }

  return condition;
}
console.log(checkEquals([4, 7, 6], [4, 5, 6]));
