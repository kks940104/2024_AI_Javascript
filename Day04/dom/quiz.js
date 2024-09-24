// box 2000개 만들기[빨,주,노,초,파,남,보]

const color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

const container = document.createElement("div");
container.classList.add("container");

const divBox = Array(2000)
  .fill(0)
  .forEach((x, i) => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = color[i % color.length];
    container.appendChild(div);
  });
document.body.appendChild(container);
