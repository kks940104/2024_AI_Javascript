import { CSSProperties } from "react";

export type positionProps = {
  position: string;
};

const Position = (props: positionProps) => {
  const albumStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    flex: "1",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };
  return (
    <div style={albumStyle}>
      <img style={imgStyle} src={props.position} alt="" />
    </div>
  );
};

export default Position;
