import { CSSProperties } from "react";
import CardUpper, { cardUpperProps } from "./CardUpper";
import CardDown, { cardDownProps } from "./CardDown";

type CardProps = cardUpperProps & cardDownProps;

const Card = (props: CardProps) => {
  const CardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  return (
    <article style={CardStyle}>
      <CardUpper {...props} />
      <CardDown {...props} />
    </article>
  );
};

export default Card;
