class Data {
  constructor(name, email, model) {
    this.name = name;
    this.email = email;
    this.model = model;
  }

  getDetails() {
    console.log(
      "My name is : " +
        this.name +
        " my email id is: " +
        this.email +
        ", Model is: " +
        this.model
    );
  }
}

let Person = new Data("Vinita","abc@gmail.com","Auroz");
console.log(Person.getDetails());

