import { CSSProperties } from "react";

export type tierProps = {
  tier: number;
};

const Tier = (props: tierProps) => {
  const tierMap: any = {
    1: "https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925",
    2: "https://s-lol-web.op.gg/images/icon/icon-tier-2.svg?v=1724034092925",
    3: "https://s-lol-web.op.gg/images/icon/icon-tier-3.svg?v=1724034092925",
    4: "https://s-lol-web.op.gg/images/icon/icon-tier-4.svg?v=1724034092925",
    5: "https://s-lol-web.op.gg/images/icon/icon-tier-5.svg?v=1724034092925",
  };

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
      <img style={imgStyle} src={tierMap[props.tier]} alt="" />
    </div>
  );
};
export default Tier;
