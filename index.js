let doter = {
    name: "Dead",
    surname: "Inside",
    age: 9,
    sayHello: function() {
        console.log(`Я ${this.name} ${this.surname} мне ${this.age} лет, хочу вступить в психокидс`);
    }
};


function Doter(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.sayHello = function() {
        console.log(`Я ${this.name} ${this.surname} мне ${this.age} лет, хочу вступить в дурку`);
    };
}

let bigDoter = new Doter("ZXC", "Гуль", 16);

doter.sayHello()
bigDoter.sayHello()

doter.surname = "Outside"

let big_doter_name = bigDoter.name

console.log(`Доступ к данным: ${doter.surname}, ${big_doter_name}`)

