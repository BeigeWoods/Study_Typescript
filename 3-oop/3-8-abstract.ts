{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    coffeeBeans: number;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    fillCoffeeBeans(beans: number): void;
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    protected coffeeBeans = 32;
    private static BEANS_GRAMM_PER_SHOT = 7;

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`griding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(public readonly serialNumber: string) {
      super();
      super.coffeeBeans;
    }
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    protected extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
        coffeeBeans: this.coffeeBeans,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor() {
      super();
      super.coffeeBeans;
    }
    private addSugar(): void {
      console.log("Adding sugar...");
    }
    protected extract(shots: number) {
      console.log(`Pulling ${shots} shots...`);
      this.addSugar();
      return {
        shots,
        hasSugar: true,
        coffeeBeans: this.coffeeBeans,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine("abc"),
    new SweetCoffeeMaker(),
  ];
  machines.forEach((machine) => {
    console.log("-------------------------");
    machine.makeCoffee(1);
  });
}
