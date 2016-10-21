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
  constructor(eyes, teeth, legs, awesome) {
    super(eyes, teeth, legs);
    this.scales = false;
    this.awesome = awesome;
  }

  whatAnimal() {
    console.log("This is a dog");
  }

  //make a function that console.log that the dog is awesome
}

var fish = new Fish(2, 0, true, true);
var dog = new Dog(2, 4, true, false);

fish.whatAnimal();
dog.whatAnimal();
dog.howManyLegs();

//Then create a function call to the function you just created.

