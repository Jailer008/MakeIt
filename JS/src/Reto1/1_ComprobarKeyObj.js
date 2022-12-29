function myFunction(a, b) {
  if (a[b] !== undefined && a[b] !== null) {
    return true;
  } else {
    return false;
  }
}

console.log(myFunction({ a: 1, w: 2, c: 3 }, "b"));
