// 1. makeCoffee 함수 만들고 이 함수 안에 [커피 준비 -> 커피 완료]
//    americano, latte, vanilla 함수 만들어서 makeCoffee안에 함수 넣으면 출력하기.
//    makeCoffee(americano) -> [커피 준비 -> 커피 만드는 중 -> 커피 완료.]

const makeCoffee = (coffee) => {
  console.log("커피 준비");
  coffee();
  console.log("커피 만들기 완료");
};

const americano = () => {
  console.log("좋은 콩 가져오기");
  console.log("원두 측정하기");
  console.log("콩을 잘 갈기");
  console.log("탬핑하기");
  console.log("머신에 포타필터 넣기");
  console.log("에스프레소 만들기");
  console.log("뜨거운 물 붓기");
  console.log("에스프레소를 뜨거운 물에 붓기");
};
const latte = () => {
  console.log("좋은 콩 가져오기");
  console.log("원두 측정하기");
  console.log("콩을 잘 갈기");
  console.log("탬핑하기");
  console.log("머신에 포타필터 넣기");
  console.log("에스프레소 만들기");
  console.log("뜨거운 물 붓기");
  console.log("에스프레소를 뜨거운 물에 붓기");
  console.log("우유 붓기");
};
const vanilla = () => {
  console.log("좋은 콩 가져오기");
  console.log("원두 측정하기");
  console.log("콩을 잘 갈기");
  console.log("탬핑하기");
  console.log("머신에 포타필터 넣기");
  console.log("에스프레소 만들기");
  console.log("뜨거운 물 붓기");
  console.log("에스프레소를 뜨거운 물에 붓기");
  console.log("우유 붓기");
  console.log("바닐라 시럽 붓기");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);

// 이런식으로 함수를 직접 만들 수 있음.
makeCoffee(() => {
  console.log("좋은 콩 가져오기");
  console.log("원두 측정하기");
  console.log("콩을 잘 갈기");
  console.log("탬핑하기");
  console.log("머신에 포타필터 넣기");
  console.log("에스프레소 만들기");
  console.log("뜨거운 물 붓기");
  console.log("에스프레소를 뜨거운 물에 붓기");
  console.log("망고 넣기");
});
