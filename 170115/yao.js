const a = 1;
const b = 2.5;
const flag = false;
const person = {name: 'Kuan', age: 26};
const c = 'hello wolrd';

const test = (a, b, callback) => {
   console.log(arguments);
}

const e = [1, 2];

if (!flag) {
  console.log(test());
}

setInterval(()=> {
  console.log(new Date());
}, 1000)