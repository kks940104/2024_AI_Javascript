import ChampionRoundImage from "./ChampionRoundImage";

type ChampionListProps = {
  images: string[];
};

const ChampionList = (props: ChampionListProps) => {
  return (
    <div>
      {props.images.map((v) => (
        <ChampionRoundImage roundImage={v} />
      ))}
    </div>
  );
};

export default ChampionList;
