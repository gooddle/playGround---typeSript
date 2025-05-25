/**
 *  기본 함수형
 * @param a
 * @param b
 */
function add(a:number, b:number): number {
    return a + b;
}

console.log(add(1,2)); // 3 반

//화살표 함수
const add2 = (x:number, y:number) => x + y;
console.log(add2(1,2)); //3  반환

//type 선언
type add3 = (x:number, y:number) => number;

const mul: add3 = (x:number, y:number) => x * y

console.log(mul(1,2)); // 2

const div = (x:number, y:number) => x % y
console.log(div(4,2)); // 0


interface Number1 {
    age?: number;
}

// null 허용
const newNumber = (number?: Number1 | null) => {
    // null이 아닐 때는 age 반환 null 이면 0 반환 ?? 뒤에는 null 일시 뒤에 값 반환
    return number?.age ?? 0;
};
let n = newNumber(undefined)
console.log(n); //0
console.log(newNumber({ age: undefined })); // 👉 0 출력
console.log(newNumber(null));
console.log(newNumber({ age: 15 }));
