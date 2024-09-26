import { CSSProperties } from "react";

type propsType = {
  fontWeight: string;
  text: string;
};

const GymName = (Porps: propsType) => {
  const cssStyle: CSSProperties = {
    fontWeight: Porps.fontWeight,
  };
  return <span style={cssStyle}>{Porps.text}</span>;
};

export default GymName;
