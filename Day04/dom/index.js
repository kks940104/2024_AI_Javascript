const div = document.createElement("div");

div.innerText = "샤브샤브";
div.style.color = "red";
document.body.appendChild(div);

// button 태그 3개 만들기.[아메리카노], [에이드], [라떼]

// ["아메리카노", "에이드", "라떼"].map((x) => {
//   const button1 = document.createElement("button");
//   button1.innerText = x;
//   button1.style.backgroundColor = "skyblue";
//   button1.style.color = "white";
//   document.body.appendChild(button1);
// });

// [아메리카노, 노랑색, 검은색], [에이드, 핑크색, 하얀색], [라떼, 하늘색, 주황색]
[
  { name: "아메리카노", bg: "yellow", color: "black" },
  { name: "에이드", bg: "pink", color: "white" },
  { name: "라떼", bg: "skyblue", color: "orange" },
].forEach((x) => {
  const button1 = document.createElement("button");
  button1.innerText = x.name;
  button1.style.backgroundColor = x.bg;
  button1.style.color = x.color;
  document.body.appendChild(button1);
});

const container = document.createElement("div");
container.classList.add("container");

const box = document.createElement("div");
box.style.backgroundColor = "red";
box.classList.add("box");
container.appendChild(box);

const box1 = document.createElement("div");
box1.style.backgroundColor = "yellow";
box1.classList.add("box");
container.appendChild(box1);

document.body.appendChild(container);
