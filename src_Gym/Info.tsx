import { CSSProperties, ReactNode } from "react";

type InfoProps = {
  children: ReactNode;
};

const Info = (Props: InfoProps) => {
  const cssStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  };
  return <div style={cssStyle}>{Props.children}</div>;
};

export default Info;
