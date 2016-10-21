class Animal {
  constructor(eyes, legs, teeth, scales) {
    this.eyes = eyes;
    this.legs = legs;
    this.teeth = teeth;
    this.scales = scales;
  }

  hasEyes() {
    if (this.eyes != 0) {
      console.log('This animal has eyes!');
    } else {
      console.log('This animal has no eyes!');
    }
  }

  howManyLegs() {
    if (this.legs > 0)
      console.log('This animal has ' + this.legs + ' legs');
    else
      console.log("This animal has no legs");
  }

  hasTeeth() {
    if(this.teeth) {
      console.log("This animal has teeth");
    }
  }

  hasScales() {
    if (this.scales) {
      console.log("This animal has scales");
    }
  }
}

class Fish extends Animal {
  constructor(eyes, teeth, scales) {
    super(eyes, teeth, scales);
    this.legs = 0;
  }

  whatAnimal() {
    console.log("This is a fish");
  }
}

class Dog extends Animal {
  constructor(eyes, teeth, legs) {
    super(eyes, teeth, legs);
    this.scales = false;
  }

  whatAnimal() {
    console.log("This is a dog");
  }
}


//Soemthing wrong with this code
var fish = new Fish();
var dog = new Dog();

fish.whatAnimal();
dog.whatAnimal();
dog.howManyLegs();