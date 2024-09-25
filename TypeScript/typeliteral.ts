// 이 안에 있는 숫자만 사용하겠다

type angryDepth = 1 | 2 | 3 | 4 | 5;
const d1: angryDepth = 5;

type jobtype = "전사" | "마법사" | "궁수" | "도적";
const d2: { id: string; level: number; job: jobtype } = {
  id: "kks940104",
  level: 300,
  job: "마법사",
};

type Hamburger = "불고기버거" | "새우버거" | "치즈버거" | "빅맥" | "상하이버거";
type Side = "감자튀김" | "치즈스틱" | "코울슬로" | "해쉬브라운";
type Drinks =
  | "제로콜라"
  | "콜라"
  | "환타"
  | "물"
  | "스프라이트"
  | "제로스프라이트";

type SetMenu = {
  main: Hamburger;
  side: Side;
  drinks: Drinks;
};

const myMacdonald: SetMenu = {
  main: "빅맥",
  side: "치즈스틱",
  drinks: "콜라",
};

type Bread =
  | "허니오트"
  | "하티"
  | "위트"
  | "파마산 오레가노"
  | "화이트"
  | "플랫브레드";

type Main = "애그마요" | "이탈리안 비엠티" | "비엘티" | "햄" | "참치";
type Cheese = "슈레드" | "아메리칸" | "모짜렐라";
type Vegetable =
  | "양상추"
  | "토마토"
  | "오이"
  | "피망"
  | "양파"
  | "피클"
  | "올리브"
  | "할라피뇨"
  | "아보카도";

type Source =
  | "랜치"
  | "스위트 어니언"
  | "마요네즈"
  | "스위트 칠리"
  | "스모그 바베큐"
  | "핫 칠리"
  | "허니 머스타드"
  | "사우스웨이트 치폴레"
  | "홀스래디쉬"
  | "머스타드"
  | "엑스트라 버진 올리브 오일"
  | "레드 와인 식초"
  | "소금"
  | "후추";
type subway = {
  bread: Bread;
  main: Main;
  cheese: Cheese;
  vegetable: Vegetable[];
  source: Source[];
};

const SetSubway: subway = {
  bread: "플랫브레드",
  main: "이탈리안 비엠티",
  cheese: "슈레드",
  vegetable: ["양상추", "양파", "올리브", "피망", "할라피뇨"],
  source: ["스위트 어니언", "핫 칠리"],
};
