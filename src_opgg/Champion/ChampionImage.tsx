import { CSSProperties } from "react";

export type championImageProps = {
  Image: string;
};

const ChampionImage = (props: championImageProps) => {
  const albumStyle: CSSProperties = {
    width: "32px",
    height: "32px",
    flex: "1",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "4px",
    flex: "1",
  };

  return (
    <div style={albumStyle}>
      <img style={imgStyle} src={props.Image} alt="" />
    </div>
  );
};

export default ChampionImage;
