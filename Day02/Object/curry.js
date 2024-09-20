const ediya = [
  {
    korName: "(L)달달커피",
    engName: "(L)Mixed coffee",
    exp: "칼로리가 높은 커피",
    kcal: 277,
    protein: 2,
    na: 39,
    suger: 20,
    fat: 9,
    caffein: 236,
    allergy: ["우유"],
  },
  {
    korName: "팥 인절미 1인빙수",
    engName: "Red Bean Injeolmi",
    exp: "팥 인절미가 들어간 빙수",
    kcal: 569,
    protein: 11,
    na: 218,
    suger: 53,
    fat: 6,
    caffein: 0,
    allergy: ["우유", "대두"],
  },
];

//#region 아직까진 몰라도 되는 내용

// div 태그 만들겠다.
const tag = document.createElement("div");

// div태그에 오른쪽 내용을 넣겠다.
// tag를 innerHTML로 HTML 내에 내용을 넣을 경우 직접 다 써줘야함.
tag.innerHTML = `
    <h4 style = "font-size : 30px">${ediya[0].korName}</h4>
    <p style = "color : grey">${ediya[0].exp}</p>
    <span>${ediya[0].kcal > 250 ? "살찌는 음료" : "살 안찌는 음료"} kcal</span>
`;

// Body 태그에 div 태그를 넣겠다.
document.body.appendChild(tag);

//#endregion
