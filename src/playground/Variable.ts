/**
 * let 가변 변수
 * 변수 선언 후 값 재할당 가능
 * 타입: String, boolean, number, object
 */

// 1 string 타입
let personName = "good"
console.log(personName) // good 반환


personName = "good2"
console.log(personName) // good2  반환


// number
let age = 15
console.log(age)// 15 반환

age = 19
console.log(age) //19 반환

//boolean
let say = true
console.log(say) //true 반환

say = false
console.log(say)// false 반환

//object 배열
let person = {personName: personName, age: age}
console.log(person)


/**
 * const 불변 변수
 * 초기화 후 재 할당 불가
 */
// 1 string 타입
const personName1 = "good"
console.log(personName1) // good 반환

// number
const age1 = 15
console.log(age1)// 15 반환

//boolean
const say1 = true
console.log(say1) //true 반환


//object 배열
let person1 = {personName: personName, age: age}
console.log(person1)