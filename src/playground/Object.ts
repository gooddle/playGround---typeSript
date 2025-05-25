// 객체는 key:value 쌍으로 구성
let object = { personName: "good", age: 10 };
console.log(object); // { personName: 'good', age: 10 }
console.log(Object.values(object))
console.log(Object.keys(object))
console.log(object.personName)
console.log(object.age) //key 기반 조회

// 배열 선언 및 요소 추가
let array = [1, 2];
array.push(3);
console.log(array); // [1, 2, 3]

// Kotlin의 map 메소드처럼: 조건을 적용해 새로운 배열 반환
let array1 = array.map(it => it * 3);
console.log(array1); // [3, 6, 9]

// Kotlin의 filter 메소드처럼: 조건에 맞는 요소만 반환
let array2 = array1.filter(it => it % 3 === 0);
console.log(array2); // [3, 6, 9]

// Kotlin의 reduce 메소드처럼: 누적합 계산, 초기값은 0
let array3 = array2.reduce((acc, it) => acc + it, 0);
console.log(array3); // 18

// 배열 병합: concat() 메소드 사용 (원본 배열은 유지)
let array4 = array2.concat(array);
console.log(array4); // [3, 6, 9, 1, 2, 3]

// 스프레드 문법 (spread syntax): 배열을 펼쳐서 병합
let array5 = [...array1, ...array2];
console.log(array5); // [3, 6, 9, 3, 6, 9]
