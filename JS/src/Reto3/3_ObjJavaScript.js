function myFunction(a, b) {
  const lengthA = a.length;
  const lengthB = b.length;
  let Obj = new Object();

  if (lengthA == lengthB) {
    for (let index = 0; index < a.length; index++) {
      const key = a[index];
      const value = b[index];

      Obj[key] = value;
    }
  } else {
    console.log("Los arreglos para la función no poseen la misma longitud");
  }

  return Obj;
}

const FinalObj = myFunction(
  ["a", "b", "c"],
  [1, () => {}, { name: "khriztian" }]
);
console.log(FinalObj);
