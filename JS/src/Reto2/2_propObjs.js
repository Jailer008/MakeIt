function ObjPara(Obj, cadena) {
  return Obj[cadena];
}

console.log(ObjPara({ country: "Sweden", continent: "Europe" }, "country"));
