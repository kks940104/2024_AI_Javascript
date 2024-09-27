// 좋아하는 색 5개 배열로 넣은 뒤에
// grid 3열 박스(100) 형태로 넣기

const colors = ["red", "skyblue", "pink", "yellow", "orange"];

const container = document.createElement("section");
container.classList.add("container");
const main = document.createElement("main");

Array(100)
  .fill(0)
  .forEach((x, i) => {
    const box = document.createElement("div");
    box.style.backgroundColor = colors[i % colors.length];
    box.classList.add("box");
    container.appendChild(box);
  });
main.appendChild(container);
document.body.appendChild(main);
