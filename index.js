const obj1 = {
  a: 10,
  b: 20,
  c: {
    d: 50,
    e: 70,
  },
  f: [80, 90],
};

let result = {};
function convert(name, obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      let firstN = name + key + ".";
      convert(firstN, obj[key]);
    } else if (Array.isArray(obj[key])) {
      obj[key].forEach((item, index) => {
        result[name + index] = obj[key][index];
      });
    } else {
      result[`${name}${key}`] = obj[key];
    }
  }
}
convert("", obj1);
console.log(result);
