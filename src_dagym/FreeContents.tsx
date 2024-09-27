import { CSSProperties } from "react";

export type freeContentsProps = {
  service: string;
};

const Freecontents = (props: freeContentsProps) => {
  const freeContectsStyle: CSSProperties = {
    backgroundColor: "#f1f3f6",
    padding: "8px 12px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  };

  const serviceStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "blod",
    color: "#999FA9",
  };

  const freeStyle: CSSProperties = {
    fontSize: "12px",
  };
  return (
    <div style={freeContectsStyle}>
      <span style={serviceStyle}>무료 서비스</span>
      <span style={freeStyle}>{props.service}</span>
    </div>
  );
};

export default Freecontents;
