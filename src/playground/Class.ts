/**
 * interface 선언 및 속성 선언
 */
interface Field {
    name: string;
    age : number;
}

//interface 상속 시 구현을 강제함
class Car implements Field {
    color:string;
    name: string;
    age : number;
    constructor(color:string,name: string, age: number) {
        this.color = color;
        this.name = name;
        this.age = age;
    }
    calAge(): number {
        return 0
    }
}
const car1 = new Car("red","car1",15)
car1.calAge()
console.log(car1)

//추상 클래스는 직접 인스턴스 생성 불가능
abstract class Truck extends Car {
    country: string;
    //추상 클래스 protected 접근 불가
    protected constructor(color: string, name: string, age: number, country: string) {
        super(color, name, age);
        this.country = country;
    }
    // override 받아서 메섣, 구현
    override calAge(): number {
       this.age += 1
        return this.age
    }
}
// class 상속 시 부모 생성자 초기화 필수
class KoreanTruck extends Truck {
    constructor(color: string, name: string, age: number, country: string = "Korean") {
        super(color,name,age,country);
    }
}
//한국 국적 트럭 인스턴스 생성
const truck1 = new KoreanTruck("black","1",15)
truck1.calAge()
console.log(truck1)


class UsaTruck extends Truck {
    constructor(color: string, name: string, age: number, country: string = "USA") {
        super(color,name,age,country);
    }

    override calAge(): number {
        this.age += 5
        return this.age
    }
}
// usa truck 생성
const truck2 = new UsaTruck("black","1",15)
truck2.calAge()
console.log(truck2)
