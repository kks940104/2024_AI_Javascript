//Array 함수
// const arr = ["Samsung", "LG", "Apple", "Google"];

// arr.push("Hyundai"); // Hyundai 뒤에 추가
// arr.unshift("Hybe"); // Hybe 앞에 추가
// arr.pop(); // 맨 끝 배열 삭제.
// arr.shift(); // 맨 앞 배열 삭제.
// arr.reverse(); // 배열 순서 변경. -> ["Google", "Apple", "LG", "Samsung"]
// arr.indexOf("LG"); // 해당 배열 Index로 변환. -> 1
// arr.indexOf("toyota"); // 해당 배열 Index로 변환하는데 없으면 -1로 반환.
// arr.includes("Google"); // 해당 배열 있는지 없는지 찾기 -> true

// 1. 유저에게 뉴스기사를 입력받고, 찾고 싶은 단어를 입력받은 후 단어가 있으면 단어가 있습니다 출력. 없으면 단어가 없습니다 출력.

const news = prompt("뉴스 입력.").split(" ");
const word = prompt("찾고싶은 단어 입력");
alert(news.includes(word) ? "단어가 있습니다." : "단어가 없습니다.");
