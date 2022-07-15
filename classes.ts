export class Chair {
  legsQuantity: number;
  weight: number;
  height: number;
  constructor(chair) {
    this.legsQuantity = chair.legsQuantity;
    this.weight = chair.weight;
    this.height = chair.height;
  }

  requestChairInfo(): void {
    console.log(
      `I am chair, i have ${this.legsQuantity} legs, my weight is ${this.weight} kg, my height is ${this.height} sm`
    );
  }

  isChairStable(): boolean {
    if (this.legsQuantity >= 3) {
      return true;
    } else {
      return false;
    }
  }
}

export class Wood {
  type: string;
  isProcessed: boolean;
  isDry: boolean;

  constructor(type: string, isProcessed: boolean, isDry: boolean) {
    this.type = type;
    this.isProcessed = isProcessed;
    this.isDry = isDry;
  }

  requestWoodInfo(): void {
    console.log(
      `I am wood, my type is ${this.type}, my processed status is ${this.isProcessed}, my dry status is ${this.isDry}`
    );
  }

  useAsFirewood(): string {
    return this.isDry ? `I'm burning!` : `I'm wet, I won't burn!`;
  }

  showCombustionHeat(): number {
    if (this.type === "birch") {
      return 5000;
    }
    if (this.type === "pine") {
      return 4900;
    }
    if (this.type === "alder") {
      return 5100;
    }
    if (this.type === "aspen") {
      return 4800;
    }
    return -1;
  }
}

export class Tabouret extends Chair {
  wood: Wood;
  constructor(chair: Chair, wood: Wood) {
    super(chair);
    this.wood = wood;
  }
  requestChairProperties(): void {
    console.log(Object.getOwnPropertyNames(this));
  }

  requestChairValue(): void {
    Object.getOwnPropertyNames(this).forEach((val) => {
      console.log(val + " -> " + this[val]);
    });
  }

  requestWoodProperties(): void {
    console.log(Object.getOwnPropertyNames(this.wood));
  }

  showChairInfo(): void {
    this.requestChairInfo();
  }

  showWoodInfo(): void {
    if (this.wood) {
      this.wood.requestWoodInfo();
    }
  }

  getParentValues(): void {
    console.log(`Is this this tabouret stable? - ${this.isChairStable()}.`);
    console.log(
      `If we use this tabouret as firewood we will get - ${this.wood.useAsFirewood()}`
    );
    console.log(
      `The heat of combustion of the material from which the tabouret is made - ${this.wood.showCombustionHeat()}`
    );
  }
}
