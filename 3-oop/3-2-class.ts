{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    coffeeBeans: number;
  };

  class CoffeeMachine {
    coffeeBeans = 0;
    static BEANS_GRAMM_PER_SHOT = 7;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
        coffeeBeans: this.coffeeBeans,
      };
    }

    static makeMachine(beans: number): CoffeeMachine {
      return new CoffeeMachine(beans);
    }
  }

  const getCoffee = new CoffeeMachine(14);
  console.log(getCoffee);
  console.log(getCoffee.makeCoffee(1));
  const machine = CoffeeMachine.makeMachine(32);
  console.log(machine);
  console.log(machine.makeCoffee(2));
}
