import { CSSProperties } from "react";

export type StarRateProps = {
  starRage: string;
};

const StarRage = (props: StarRateProps) => {
  const StarRageStyle: CSSProperties = {
    color: "#FFC500",
    fontSize: "12px",
    fontWeight: "blod",
  };
  return <span style={StarRageStyle}>{props.starRage}</span>;
};

export default StarRage;
