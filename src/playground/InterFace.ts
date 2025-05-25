/**
 * interFace
 * 객체의 타입을 정의
 */
interface Person {
    name: string;
    age: number;
}

// 객체 정의
const makePerson: Person = {
    name:"goo",
    age: 20,
}

console.log(makePerson)

// 상속
interface Developer extends Person {
    language: string;
}

const developer: Developer = {
    name: "ji",
    age: 10,
    language: "javascript",
}
console.log(developer);

interface CalAge extends Person {
    cal(): number;
}


//상속
class Person1 implements CalAge {
    name: string;
    age: number;

    //생성자
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    cal(): number {
        return this.age + 1;
    }
}

const p: CalAge = new Person1("ji", 20);
console.log(p) //Person1 { name: '지원', age: 20 }
console.log(p.cal()); // 21

