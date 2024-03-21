class Person {
    constructor(name) {
        this.name = name;
        this.id = name.length;
    }

    toString = () => `Name: ${this.name} - Personal Number: ${this.id}`;
}

const people = ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'];


for (p of people){
    console.log(new Person(p).toString())
}