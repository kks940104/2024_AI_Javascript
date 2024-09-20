// 버스 종류
// 마을 버스, 시내 버스, 고속 버스, 심야 버스
// 가격 : 1500, 2000, 8000, 10000

// 경기권, 충청권, 강원권, 제주권
// +2000, +3000, +3000, +10000

// 좌석
// 일반석, 프리미엄석, 넷플석
// +1000, +3000, +4000

// 나이 13세 이하면 20%, 65세 이상이면 50%, 나머지 100%

const bus = {
  bus_list: {
    name: ["마을버스", "시내버스", "고속버스", "심야버스"],
    price: [1500, 2000, 8000, 10000],
  },
  country: {
    name: ["경기권", "충청권", "강원권", "제주권"],
    price: [2000, 3000, 3000, 10000],
  },
  seat: {
    name: ["일반석", "프리미엄석", "넷플석"],
    price: [1000, 3000, 4000],
  },
};

const bus_list_index = Number(
  prompt(`${bus.bus_list.name}중 하나를 고르시오. (0~3)`)
);
const country_index = Number(
  prompt(`${bus.country.name}중 하나를 고르시오. (0~3)`)
);
const seat_index = Number(prompt(`${bus.seat.name}중 하나를 고르시오. (0~2)`));

const age = Number(prompt("당신은 몇살입니까?"));

const msg = `버스는 ${bus.bus_list.name[bus_list_index]}를 고르셨고, 지역은 ${bus.country.name[country_index]}을 고르셨습니다.
마지막으로 좌석은 ${bus.seat.name[seat_index]} 고르셨습니다. 그리고 당신의 나이는 ${age}살 입니다.`;

const is13 = age <= 13 ? true : false;
const is65 = age >= 65 ? true : false;

console.log(msg);

if (is13) {
  const total =
    (bus.bus_list.price[bus_list_index] +
      bus.country.price[country_index] +
      bus.seat.price[seat_index]) *
    0.8;

  console.log(`총 가격은 ${total}원 나왔습니다.`);
} else if (is65) {
  const total =
    (bus.bus_list.price[bus_list_index] +
      bus.country.price[country_index] +
      bus.seat.price[seat_index]) *
    0.5;

  console.log(`총 가격은 ${total}원 나왔습니다.`);
} else {
  const total =
    (bus.bus_list.price[bus_list_index] +
      bus.country.price[country_index] +
      bus.seat.price[seat_index]) *
    1;

  console.log(`총 가격은 ${total}원 나왔습니다.`);
}
