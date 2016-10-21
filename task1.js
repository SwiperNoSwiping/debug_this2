class Person {
  constructor(name, weight, gender) {
    this.name = name
    this.weight = weight
    this.gender = gender
  }
  sayMyName() {
    console.log(this.name);
  }
}

var alan = new Person("Alan", 80, "M");
alan.sayMyName();
