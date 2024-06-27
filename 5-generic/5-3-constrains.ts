interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {}
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

ellieAfterPay.workFullTime();
bobAfterPay.workPartTime();

function getValue<O, K extends keyof O>(object: O, key: K): O[K] {
  return object[key];
}

const obj = {
  name: "hh",
};

const obj2 = {
  age: 33,
};

console.log(getValue(obj, "name"));
console.log(getValue(obj2, "age"));
