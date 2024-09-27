import { CSSProperties } from "react";

export type AlbumProps = {
  image: string;
};

const Album = (props: AlbumProps) => {
  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const divStyle: CSSProperties = {
    width: "130px",
    height: "150px",
  };

  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.image} alt="" />
    </div>
  );
};

export default Album;
