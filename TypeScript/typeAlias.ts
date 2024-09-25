type person = { name: string; age: number; gender: string };
type college = { id: number; grade: number; major: string };
type collegeStudent = person & college;

const c: person = { name: "엄준식", age: 21, gender: "남" };

const c2: person[] = [
  { name: "엄준식", age: 21, gender: "남" },
  { name: "엄준식", age: 22, gender: "남" },
  { name: "엄준식", age: 23, gender: "여" },
];

const c3: collegeStudent = {
  name: "엄준식",
  age: 21,
  gender: "남",
  id: 12345,
  grade: 2,
  major: "컴공",
};

type product = { name: string; price: number };
type meal = { calories: number; category: string };
type dessert = { calories: number; sweetnessLevel: number };

const saltBread: product & meal = {
  name: "소금빵",
  calories: 150,
  category: "빵",
  price: 1500,
};

const eggTart: product & dessert = {
  name: "애그타르트",
  calories: 200,
  price: 2500,
  sweetnessLevel: 3,
};
