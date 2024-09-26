import { CSSProperties } from "react";

type propsType = {
  color: string;
  fontSize: string;
  text: string;
};

const Category = (Porps: propsType) => {
  const cssStyle: CSSProperties = {
    color: Porps.color,
    fontSize: Porps.fontSize,
  };
  return <span style={cssStyle}>{Porps.text}</span>;
};

export default Category;
