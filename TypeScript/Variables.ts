const a = "아메리카노";
const a1 = "라떼";

// 타입 어노테이션
const a2: string = "1";
const a3: boolean = true;
const a4: Number[] = [1, 2, 3, 4, 5];
const a5: {
  name: string;
  isIce: boolean;
  price: number;
}[] = [
  { name: "아아", isIce: true, price: 2000 },
  { name: "라떼", isIce: true, price: 2500 },
];

// age, isMan, nation object[] 타입 어노테이션 만들기

const country: { age: number; isMan: boolean; nation: string }[] = [
  { age: 31, isMan: true, nation: "Korean" },
  { age: 23, isMan: true, nation: "Korean" },
  { age: 27, isMan: false, nation: "Japanese" },
];
