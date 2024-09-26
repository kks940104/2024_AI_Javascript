import { CSSProperties } from "react";

type propsType = {
  fontSize: string;
  text: string;
};

const Service = (Porps: propsType) => {
  const cssStyle: CSSProperties = {
    fontSize: Porps.fontSize,
  };
  return <span style={cssStyle}>{Porps.text}</span>;
};

export default Service;
