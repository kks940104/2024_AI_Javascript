type plusMinusProps = {
  name: string;
  click: () => void;
};

const PlusMinus = (props: plusMinusProps) => {
  return <button onClick={props.click}>{props.name}</button>;
};

export default PlusMinus;
