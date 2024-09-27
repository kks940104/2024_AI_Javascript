// 1. 아메리카노 주문 버튼 태그 만들고 누르면 주문 완료!로 바뀌는 버튼 만들기.

// 2. 배경색이 하늘색 버튼 태그 만들고 누르면 핑크색으로 바뀌는 버튼 만들기.

//#region 이전 퀴즈

/* const btn_americano = document.createElement("button");
btn_americano.innerText = "아메리카노";
const btn_skyblue = document.createElement("button");
btn_skyblue.innerText = "하늘색";
btn_skyblue.style.backgroundColor = "skyblue";

const main = document.createElement("main");
const section = document.createElement("section");
main.appendChild(section);
section.appendChild(btn_americano);
section.appendChild(btn_skyblue);

btn_americano.addEventListener("click", () => {
  btn_americano.innerText = "주문완료!";
});

btn_skyblue.addEventListener("click", () => {
  btn_skyblue.style.backgroundColor = "pink";
  btn_skyblue.innerText = "핑크색";
});

document.body.append(main); */

//#endregion

// 버튼 다른 색으로 5개 만들고 버튼내용은 그 안에 색을 넣어야함.
// 버튼을 누르면 아래 박스 색이 바뀌어야함.

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid black";

["red", "orange", "yellow", "green", "blue"].forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x;
  button.style.backgroundColor = x;
  button.addEventListener("click", () => {
    box.style.backgroundColor = x;
  });
  document.body.appendChild(button);
});

// 버튼 두개 추가 [네모],[둥글게]

[
  {
    name: "네모",
    shape: "0px",
  },
  {
    name: "둥글게",
    shape: "9999px",
  },
].forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x.name;
  button.addEventListener("click", () => {
    box.style.borderRadius = x.shape;
  });
  document.body.appendChild(button);
});

document.body.appendChild(box);
