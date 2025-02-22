const x = {};
const y = {};
console.log(x);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
  // instance member level
  this.makeCoffee = (shots) => {
    console.log("making...");
  };
}

// prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachince(milk) {
  this.milk = milk;
}
LatteMachince.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachince(123);
console.log(latteMachine);
latteMachine.makeCoffee(2);
