import { CSSProperties } from "react";

type propType = {
  width: string;
  height: string;
  backgroundColor: "red" | "orange" | "blue" | "green";
  text: string;
};

const Box = (props: propType) => {
  const cssStyle: CSSProperties = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
  };
  return <div style={cssStyle}>{props.text}</div>;
};

export default Box;
