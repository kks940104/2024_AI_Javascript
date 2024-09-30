import { CSSProperties, useState } from "react";
import PlusMinus from "./PlusMinus";

const Counter = () => {
  const cssStyle: CSSProperties = {
    width: "500px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid gray",
    gap: "20px",
  };

  const [num, setNum] = useState({
    Green: { price: 15000, count: 0 },
    Red: { price: 23000, count: 0 },
    Blue: { price: 37000, count: 0 },
  });

  const [counters, setCounters] = useState(["Green"]); // 초기 값을 Green배열 하나로 정의.

  const changeCount = (
    color: "Green" | "Red" | "Blue", //Color은 Green, Red, Blue로만 나올 수 있게 Type 정의
    action: "plus" | "minus" // action은 내가 무엇을 할지 정의.
  ) => {
    setNum((prev) => {
      const currentCount = prev[color].count; // prev[color]은 color의 값을 확인 후 count로 변경.
      const newCount =
        action == "plus"
          ? currentCount + 1
          : action == "minus" && currentCount > 0 // 여기서 조건을 더 걸어서 > 0 일때 만 -로 갈 수 있게.
          ? currentCount - 1
          : currentCount; // Plus면 New Count가 +1이 되고 아니라면 -1.

      return {
        ...prev, // prev를 그대로 받아오고
        [color]: {
          // counters 이거 자체가 Green이나 Red, Blue이기에 그 안에 있는 setNum의 count를 변경.
          ...prev[color],
          count: newCount,
        },
      };
    });
  };

  const getCounterStyle = (isButtonContainer: boolean): CSSProperties => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: isButtonContainer ? "flex-start" : "space-between", // boolean 형식을 통해 형식 지정.
    gap: isButtonContainer ? "10px" : "0", // 이하동문
  });

  const addCounter = () => {
    const availableColors = ["Red", "Blue"]; // Red 및 blue 추가.
    const newColor = availableColors.find((color) => !counters.includes(color));
    if (newColor) {
      setCounters([...counters, newColor]); // setCounters를 통해 counters는 그대로 받지만 newColor에서 Red 및 Blue를 추가.
    }
  };

  const counterLast = () => {
    // 배열 길이에서 -1을 해서 0,1,2의 글자를 받아와서 확인.
    const lastCounter = counters[counters.length - 1];
    if (
      lastCounter == "Green" ||
      lastCounter == "Red" ||
      lastCounter == "Blue"
    ) {
      removeCounter(lastCounter);
    }
  };

  const removeCounter = (color: "Green" | "Red" | "Blue") => {
    if (counters.length > 1) {
      // 2이상일때만 삭제할 수 있게
      setNum((prev) => ({
        // setNum에서 prev그대로 받고, [color] : obejct를 통해 count 0으로 만듦.
        ...prev,
        [color]: { ...prev[color], count: 0 },
      }));
      setCounters(counters.filter((c) => c != color)); // filter를 통해 color 삭제.
    }
  };

  // Box 컴포넌트 생성
  const renderCounter = (color: "Green" | "Red" | "Blue") => (
    <div style={cssStyle}>
      <span>{`화이트 ${color}`}</span>
      <div style={getCounterStyle(false)}>
        <div style={getCounterStyle(true)}>
          <PlusMinus click={() => changeCount(color, "plus")} name="+" />
          <span>{num[color].count}</span>
          <PlusMinus click={() => changeCount(color, "minus")} name="-" />
        </div>
        <span>{num[color].count * num[color].price}원</span>
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {counters.map((color) => {
        if (color === "Green" || color === "Red" || color === "Blue") {
          return renderCounter(color);
        }
      })}
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <span>
          총 개수 : {num.Green.count + num.Red.count + num.Blue.count}
        </span>
        <span>
          총 가격 :
          {num.Green.count * num.Green.price +
            num.Red.count * num.Red.price +
            num.Blue.count * num.Blue.price}
          원
        </span>
        <button onClick={addCounter}> + </button>
        <button
          onClick={() => {
            counterLast();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
