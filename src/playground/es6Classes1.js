class Person {
     constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
     }

     getGreeting() {
        // return 'Hello ' + this.name;
        return `Hi. I am ${this.name}`;
     }

     getDescription() {
         return `${this.name} is ${this.age} year(s) old.`
     }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` His major is ${this.major}.`
        }
        return description;
    }
    
}

class Travelor extends Person {
    constructor(name,homeLocation) {
        super(name);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.hasHomeLocation;
    }

    getGreeting() {
        if (this.hasHomeLocation()) {
            return `${super.getGreeting()} I am visiting from ${this.homeLocation}`;
        }
    }
}

const me = new Student('Sean Gammage', 29, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const travelor = new Travelor('Sean Gammage','STL');
console.log(travelor.getGreeting());