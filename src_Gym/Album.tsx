import { CSSProperties, ReactNode } from "react";

type AlbumProps = {
  children: ReactNode;
};

const Album = (Props: AlbumProps) => {
  const cssStyle: CSSProperties = {
    width: "130px",
    height: "150px",
  };
  return <div style={cssStyle}>{Props.children}</div>;
};

export default Album;
