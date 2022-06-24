class Animal {
    constructor(name = "Misko", age = 0) {
        this.name = name;
        this.age = age;
    }
    roar() {
        return "";
    }
    eat() {
        return "give me food";
    }
}

const animalObj = new Animal(Ire, 25);
console.log(typeof animalObj.eat());