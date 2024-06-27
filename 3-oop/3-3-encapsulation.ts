{
  // type CoffeeCup = {
  //   shots: number;
  //   hasMilk: boolean;
  //   coffeeBeans: number;
  // };

  // class CoffeeMachine {
  //   private coffeeBeans = 0;
  //   private static BEANS_GRAMM_PER_SHOT = 7;

  //   fillCoffeeBeans(beans: number) {
  //     if (beans < 0) {
  //       throw new Error("value for beans should be greater than 0");
  //     }
  //     this.coffeeBeans += beans;
  //   }

  //   makeCoffee(shots: number): CoffeeCup {
  //     if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
  //       throw new Error("not enough coffee beans!");
  //     }
  //     this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
  //     return {
  //       shots,
  //       hasMilk: false,
  //       coffeeBeans: this.coffeeBeans,
  //     };
  //   }

  //   static makeMachine(): CoffeeMachine {
  //     return new CoffeeMachine();
  //   }
  // }

  class CoffeeMaker {
    coffeeBeans = 0;

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(beans: number): CoffeeMaker {
      return new CoffeeMaker(beans);
    }
  }

  // class User {
  //   private internalAge = 4;
  //   get age(): number {
  //     return this.internalAge;
  //   }
  //   set age(num: number) {
  //     this.internalAge = num;
  //   }
  //   get fullName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   constructor(private firstName: string, private lastName: string) {}
  // }

  // const getCoffee = new CoffeeMachine();
  // console.log(getCoffee);
  // getCoffee.fillCoffeeBeans(32);
  // console.log(getCoffee.makeCoffee(1));
  // getCoffee.fillCoffeeBeans(6);
  // console.log(getCoffee);
  // const machine = CoffeeMachine.makeMachine();
  // machine.fillCoffeeBeans(3);
  // console.log(machine);

  // const maker = new CoffeeMaker();
  // const maker2 = new CoffeeMaker(32);
  const maker3 = CoffeeMaker.makeMachine(32);
}
