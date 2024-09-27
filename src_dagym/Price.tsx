import { CSSProperties } from "react";

export type PriceProps = {
  price: number;
};

const Pirce = (props: PriceProps) => {
  const priceStyle: CSSProperties = {
    fontSize: "20px",
    fontWeight: "blod",
    color: "#3d4149",
  };
  return (
    <div>
      <span style={priceStyle}>{props.price}~</span>
      <span>/월</span>
    </div>
  );
};

export default Pirce;
