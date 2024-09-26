import { CSSProperties } from "react";

type propsType = {
  fontWeight: string;
  fontSize: string;
  text: string;
};

const Price = (Porps: propsType) => {
  const cssStyle: CSSProperties = {
    fontWeight: Porps.fontWeight,
    fontSize: Porps.fontSize,
  };
  return <span style={cssStyle}>{Porps.text}</span>;
};

export default Price;
