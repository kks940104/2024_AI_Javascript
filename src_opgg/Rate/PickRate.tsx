import { CSSProperties } from "react";

export type pickRateProps = {
  pickRate: number;
};

const PickRate = (props: pickRateProps) => {
  const PickRateStlye: CSSProperties = {
    fontSize: "12px",
    color: "#57646F",
    flex: "1",
  };
  return (
    <span style={PickRateStlye}>{`${(props.pickRate * 100).toFixed(2)}%`}</span>
  );
};

export default PickRate;
