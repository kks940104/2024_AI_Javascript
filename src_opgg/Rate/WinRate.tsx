import { CSSProperties } from "react";

export type winRateProps = {
  winRate: number;
};

const WinRate = (props: winRateProps) => {
  const winRateStlye: CSSProperties = {
    fontSize: "12px",
    color: "#57646F",
    flex: "1",
  };
  return (
    <span style={winRateStlye}>{`${(props.winRate * 100).toFixed(2)}%`}</span>
  );
};

export default WinRate;
