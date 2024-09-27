import { CSSProperties } from "react";

export type championRoundImageProps = {
  roundImage: string;
};

const ChampionRoundImage = (props: championRoundImageProps) => {
  const albumStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    flex: "1",
    display: "flex",
    borderRadius: "9999px",
  };

  const imgStyle: CSSProperties = {
    // width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "9999px",
  };
  return (
    <div style={albumStyle}>
      <img style={imgStyle} src={props.roundImage} alt="" />
    </div>
  );
};

export default ChampionRoundImage;
