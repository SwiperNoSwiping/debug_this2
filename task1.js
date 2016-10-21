class Person {
  constructor(name, weight, gender) {
    //What goes in here?
    //Hint: take a look at your previous work.
  }

  sayMyName() {
    console.log(this.name);
  }
}

var alan = new Person("Alan", 80, "M");
alan.sayMyName();