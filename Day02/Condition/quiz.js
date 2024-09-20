// CGV 프로그램

// 1. 영화 고르기 - ["베테랑2", "에일리언", "사랑의하츄핑"]
// 2. 좌석 등급 고르기 - standard[10000], couple[20000], premium[15000], economy[8000]
// 3. 팝콘 고르기 - 일반[6000], 카라멜[6500], 치즈[6500], 반반[7000]
// 4. 음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
// 5. 나이 입력 - 13세 이하면 30% 할인, 60세 이상 20% 할인 영화만.

// 다 골랐을 시 영화, 좌석, 팝콘, 음료 총 금액 : ~~~입니다.

//#region 내용

const movie = {
  name: ["베테랑", "에일리언", "사랑의하츄핑"],
  seat: [
    { name: "standard", price: 10000 },
    { name: "couple", price: 20000 },
    { name: "premium", price: 15000 },
    { name: "economy", price: 8000 },
  ],
};

const shop = {
  popcorn: [
    { name: "일반 팝콘", price: 6000 },
    { name: "카라멜 팝콘", price: 6500 },
    { name: "치즈 팝콘", price: 6500 },
    { name: "반반 팝콘", price: 7000 },
  ],
  juice: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

const movie_choice = Number(prompt(`${movie.name} 중에 고르세요.(0~2)`));
const seat_choice = Number(
  prompt(
    `${movie.seat[0].name}, ${movie.seat[1].name}, ${movie.seat[2].name}, ${movie.seat[3].name} 중에 고르세요.(0~3)`
  )
);
const popcorn_choice = Number(
  prompt(
    `${shop.popcorn[0].name}, ${shop.popcorn[1].name}, ${shop.popcorn[2].name}, ${shop.popcorn[3].name} 중에 고르세요.(0~3)`
  )
);
const juice_choice = Number(
  prompt(
    `${shop.juice[0].name}, ${shop.juice[1].name}, ${shop.juice[2].name} 중에 좌석을 고르세요.(0~2)`
  )
);

const age = Number(prompt("몇살이신가요?"));

if (age <= 13) {
  const total =
    movie.seat[seat_choice].price * 0.7 +
    shop.popcorn[popcorn_choice].price +
    shop.juice[juice_choice].price;
  console.log(
    `${movie.name[movie_choice]}, ${movie.seat[seat_choice].name}, ${shop.popcorn[popcorn_choice].name}, ${shop.juice[juice_choice].name}`
  );
  console.log(`총 금액은 ${total}원 입니다.`);
} else if (age >= 60) {
  const total =
    movie.seat[seat_choice].price * 0.8 +
    shop.popcorn[popcorn_choice].price +
    shop.juice[juice_choice].price;
  console.log(
    `${movie.name[movie_choice]}, ${movie.seat[seat_choice].name}, ${shop.popcorn[popcorn_choice].name}, ${shop.juice[juice_choice].name}`
  );
  console.log(`총 금액은 ${total}원 입니다.`);
} else {
  const total =
    movie.seat[seat_choice].price * 1 +
    shop.popcorn[popcorn_choice].price +
    shop.juice[juice_choice].price;
  console.log(
    `${movie.name[movie_choice]}, ${movie.seat[seat_choice].name}, ${shop.popcorn[popcorn_choice].name}, ${shop.juice[juice_choice].name}`
  );
  console.log(`총 금액은 ${total}원 입니다.`);
}

//#endregion
