class Person {
    constructor(name, age, id, lastName) {
      this.name = name;
      this.age = age;
      this.id = id;
      this.lastName = lastName;
    }
  }
  
    let personsArray = [];
  
 
  function pushPerson(name, age, id, lastName) {
    let person = new Person(name, age, id, lastName);
    personsArray.push(person);
  }
  
  
  pushPerson("Muhammaddior", 16, 1234, "Esanbaev");
  pushPerson("Nurseit", 18, 5678, "Nuridinov");
  
  console.log(personsArray);