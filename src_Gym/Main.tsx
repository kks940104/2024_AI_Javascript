import { CSSProperties, ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main = (Props: MainProps) => {
  const cssStyle: CSSProperties = {
    width: "100vw",
  };
  return <main style={cssStyle}>{Props.children}</main>;
};

export default Main;
