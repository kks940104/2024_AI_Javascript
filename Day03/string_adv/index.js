//string_adv
const pizza = "cheese pizza";

// 포함하는지 안하는지 -> 대소문자 구별이 되는건지? -> 대소문자 구별됨. 문자 전체 다 찾아주는건지? EX) 만약 ca를 넣는다면 true가 되나? -> false가 됨
const hasCheese = pizza.includes("cheese"); // true
const hasPine = pizza.includes("pineapple"); // false
const hasC = pizza.includes("c"); // true
const hasEE = pizza.includes("ee"); // true

// 해당 문자가 몇번째 인덱스에 있는지 -> 대소문자 구별이 되는건지?
const indexH = pizza.indexOf("h"); // 1
const indexB = pizza.indexOf("b"); // -1

// 해당 문자를 변경시켜주는 함수. -> 특정 문자를 바꾸고싶을땐 어떻게 해야하는지? EX) pizza에서 pizka로 바꾸고싶다면?
pizza.replace("z", "k"); // cheese pikza -> 맨 처음 하나만 바꿔줌.
pizza.replaceAll("z", "k"); // cheese pikka -> 전체 다 변경.

// 특정 문자로 시작, 끝 확인
pizza.startsWith("pizza"); // false
pizza.endsWith("pizza"); // true

// 문자 대소문자 변경
pizza.toLowerCase(); // -> cheese pizza 모든 문자가 소문자로 변경
pizza.toUpperCase(); // -> CHEESE PIZZA 모든 문자가 대문자로 변경

// 자르기
pizza.slice("0,4"); // -> chee. 매개변수 안에 첫번째는 index 0으로 시작, 두번째는 1로 시작.

// ★★★나누기[배열화]★★★
pizza.split("i"); // -> ["cheese p", "zza"]
pizza.split(" "); // -> ["cheese", "pizza"]

// 반복하기
pizza.repeat(3); // cheese pizza cheese pizza cheese pizza로 output

// 문자 길이 구하기
pizza.length; // cheese pizza의 문자 길이 = 12
