import { CSSProperties } from "react";

export type GymnameProps = {
  gymName: string;
};

const Gymname = (props: GymnameProps) => {
  const gymNameStyle: CSSProperties = {
    fontWeight: "bold",
    lineHeight: "26px",
    // "&:hover": {
    //     background: "#efefef"
    //   },
  };
  return <span style={gymNameStyle}>{props.gymName}</span>;
};

export default Gymname;
