console.log("Sapphire's JavaScript Script");

class Person {
    // a constructor is a method that defines the properties of a class
    constructor(name, age, address, marital_status, kids, educational_level) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.marital_status = marital_status;
        this.kids = kids;
        this.educational_level = educational_level; 
    }

    /*  greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
                } 
    */

}

console.log("Class defined")
const person1 = new Person("Sapphire", 29, "The Bahamas", "Single", "0", "Bachelors in Theoretical Mathematics");


console.log("~ Personal Information ~", "\n",
            "Name: ", person1.name, "\n", 
            "Age: ", person1.age, "\n",
            "Address: ", person1.address, "\n",
            "Marital Status: ", person1.marital_status, "\n",
            "Number of Children: ", person1.kids, "\n",
            "Educational Level: ", person1.educational_level
            );


            const becky = new Person("Rebecca", 45, "Birmingham, Alabama", "Married", "3", "Bachelors in Special Education");


            console.log("~ Personal Information ~", "\n",
                        "Name: ", becky.name, "\n", 
                        "Age: ", becky.age, "\n",
                        "Address: ", becky.address, "\n",
                        "Marital Status: ", becky.marital_status, "\n",
                        "Number of Children: ", becky.kids, "\n",
                        "Educational Level: ", becky.educational_level
                        );


// console.log(this.name, this.age);
// person1.console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);






