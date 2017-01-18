const person = {
  name: "yao",
  age: 18,
  eat: () => {

  }
}


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function () {
    console.log(`${name} is ${age}, ${name} is eating`)
  }
}

Person.prototype.eat = (name, age) => {
  console.log(`${name} is ${age}, ${name} is eating`)
};

const yao = new Person('Kuan', 18);
yao.eat();



