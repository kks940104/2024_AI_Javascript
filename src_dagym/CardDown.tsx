import FreeContents, { freeContentsProps } from "./FreeContents";

export type cardDownProps = freeContentsProps;

const CardDown = (props: cardDownProps) => {
  return (
    <div>
      <FreeContents service={props.service}></FreeContents>
    </div>
  );
};

export default CardDown;
