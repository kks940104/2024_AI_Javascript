import { CSSProperties } from "react";

export type banRateProps = {
  banRate: number;
};

const BanRate = (props: banRateProps) => {
  const BanRateStlye: CSSProperties = {
    fontSize: "12px",
    color: "#57646F",
    flex: "1",
  };
  return (
    <span style={BanRateStlye}>{`${(props.banRate * 100).toFixed(2)}%`}</span>
  );
};

export default BanRate;
