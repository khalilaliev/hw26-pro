"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  personInfo() {
    console.log(`Name: ${this.name}, age is ${this.age}`);
  }
}

class Auto {
  constructor(brand, model, year, plate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.plate = plate;
  }
  owner(ownerOfAuto) {
    if (ownerOfAuto instanceof Person) {
      this.ownerOfAuto = ownerOfAuto;
      if (this.ownerOfAuto.age < 18) {
        console.log("You cannot drive a car!");
      } else {
        console.log("You have all rights to drive a car!");
      }
    }
  }
}

const person1 = new Person("Jason", 17);
const person2 = new Person("Bob", 27);

const auto = new Auto("Audi", "A7", 2016, "BT3300CI");

auto.owner(person1);
auto.owner(person2);
