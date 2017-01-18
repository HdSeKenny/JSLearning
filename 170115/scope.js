// Scope 域
var person = "kuan";
const test = () => {
  const a = 2;
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6]
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i]
  }

  for (var i = arr2.length - 1; i >= 0; i--) {
    arr2[i]
  }

  return person;
}

console.log(test());