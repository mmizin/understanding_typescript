class User1 {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class User2 {
    constructor(
        public name: string,
        public age: number,
        public gender: string
    ) {}
}

class User3 {
    constructor(
        public name = 'name',
        public age = 10,
        public gender = 'male'
    ) {}
}

class User4 {
    constructor(
        public name: string = 'name',
        public age: number = 10,
    ) {}
}

interface IUser {
    name: string;
    age: number;
    gender: string;
}

class User5 implements IUser {
    constructor(
        public name: string,
        public age: number,
        public gender: string
    ) {}
}