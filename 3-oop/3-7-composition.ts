{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
    coffeeBeans: number;
  };

  // 커피 머신
  interface CoffeeMaker {
    fillCoffeeBeans(beans: number): void;
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    protected coffeeBeans = 32;
    private static BEANS_GRAMM_PER_SHOT = 7;

    constructor(private milk: MilkFrother, private sugar: SugarProvider) {}

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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
        coffeeBeans: this.coffeeBeans,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  // 우유 첨가
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Cheap steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ExpensMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Expensive steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 첨가
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapSugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some cheap sugar...🍭");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class ExpensSugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some expensive sugar...🍭");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // // 자식 커피 머신들
  // class CaffeLatteMachine extends CoffeeMachine {
  //   constructor(
  //     public readonly serialNumber: string,
  //     private milk: MilkFrother
  //   ) {
  //     super();
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milk.makeMilk(coffee);
  //   }
  // }

  // class SweetCoffeeMaker extends CoffeeMachine {
  //   constructor(private sugar: SugarProvider) {
  //     super();
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugar.addSugar(coffee);
  //   }
  // }

  // class SweetCaffeLatteMachine extends CoffeeMachine {
  //   constructor(private sugar: SugarProvider, private milk: MilkFrother) {
  //     super();
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     const milkCoffee = this.milk.makeMilk(coffee);
  //     return this.sugar.addSugar(milkCoffee);
  //   }
  // }

  // 커피 머신 만들기 및 사용하기
  // 1. 우유
  const cheapMilkSteamer = new CheapMilkSteamer();
  const expensMilkSteamer = new ExpensMilkSteamer();
  const noMilk = new NoMilk();

  // 2. 설탕
  const cheapSugarMixer = new CheapSugarMixer();
  const expensSugarMixer = new ExpensSugarMixer();
  const noSugar = new NoSugar();

  // 3. 커피 머신
  // const sweetCoffeeMaker = new SweetCoffeeMaker(expensSugarMixer);
  // const caffeLatteMachine = new CaffeLatteMachine("e123", expensMilkSteamer);
  // const sweetCaffeLatteMachine = new SweetCaffeLatteMachine(
  //   cheapSugarMixer,
  //   cheapMilkSteamer
  // );

  // 4. 부모 클래스로만 다양한 커피 머신 만들기
  const cheapSweetCoffeeMachine = new CoffeeMachine(noMilk, cheapSugarMixer);
  const latteMachine = new CoffeeMachine(expensMilkSteamer, noSugar);
  const sweetLatteMachine = new CoffeeMachine(
    cheapMilkSteamer,
    expensSugarMixer
  );
}
