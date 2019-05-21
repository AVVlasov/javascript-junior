const sum = (...args) =>
  (
      (f) => (f.valueOf = () => args.reduce((p, c) => p + c), f))((...next) =>
    sum(...args, ...next)
  )

console.log(+sum(1)(2));
console.log(+sum(1, 2, 4)(5));
console.log(+sum(1)(2)(3, 4));
console.log(+sum(1, 2, 3)(4));

function isPolindrome (word) {
    return word === word.split('').reverse().join('');
}

console.log(isPolindrome('abba'))