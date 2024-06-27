// class User {
//   private firstName: string;
//   private lastName: string;
//   private _age = 0;

//   constructor(firstName: string, lastName: string, age: number) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(num: number) {
//     this._age = num < this._age ? this._age : 12;
//   }
// }

// const user = new User("lee", "joo", -1);
// console.log(user.age);

// class User {
//   private _age = 4;

//   get age(): number {
//     return this._age;
//   }
//   set age(num: number) {
//     this._age = num < this._age ? this._age : num;
//   }

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   constructor(
//     private firstName: string,
//     private lastName: string,
//     age: number
//   ) {
//     this.age = age;
//   }
// }

// const me = new User("ellie", "Jo", 6);
// console.log(me.age);
// console.log(me.fullName);
// me.age = 13;
// console.log(me.age);

class User {
  private _age = 4;

  set age(num: number) {
    console.log(this._age);
    this._age = num < this._age ? this._age : num;
    console.log(this._age); // 13
  }

  constructor(age: number) {
    this._age = age;
  }
}

const me = new User(6);
me.age = 13;
