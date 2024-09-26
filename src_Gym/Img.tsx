import { CSSProperties } from "react";
import data from "./data";

const cl = data.result.centerList;

type PropsType = {
  src: string;
};

const Img = (Props: PropsType) => {
  const cssStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };
  return <img style={cssStyle} src={Props.src} alt="" />;
};

export default Img;
