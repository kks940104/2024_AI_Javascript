import { CSSProperties, ReactNode } from "react";

type CradProps = {
  children: ReactNode;
};

const Card = (Props: CradProps) => {
  const cssStyle: CSSProperties = {
    width: "75%",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    borderRadius: "10px",
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  return <div style={cssStyle}>{Props.children}</div>;
};

export default Card;
