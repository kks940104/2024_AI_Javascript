import { CSSProperties } from "react";
import ChampionImage, { championImageProps } from "../Champion/ChampionImage";
import ChampionName, { championNameProps } from "../Champion/ChampionName";
import Elevation, { elevationProps } from "../Rank/Elevation";
import Rank, { rankProps } from "../Rank/Rank";
import Tier, { tierProps } from "../Tier/Tier";
import Position, { positionProps } from "../Position/Position";
import WinRate, { winRateProps } from "../Rate/WinRate";
import PickRate, { pickRateProps } from "../Rate/PickRate";
import BanRate, { banRateProps } from "../Rate/BanRate";
import ChampionRoundImage, {
  championRoundImageProps,
} from "../Champion/ChampionRoundImage";
import { championRankingList } from "../Data/data";

type OpggLayout = tierProps &
  winRateProps &
  pickRateProps &
  banRateProps &
  rankProps &
  elevationProps &
  positionProps &
  championImageProps &
  championNameProps &
  championRoundImageProps;
const Card = (props: OpggLayout) => {
  const cardStyle: CSSProperties = {
    maxWidth: "1280px",
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #ebeef1",
    padding: "5px",
    justifyContent: "space-around",
    flex: "1",
  };
  return (
    <article style={cardStyle}>
      <Rank rank={props.rank}></Rank>
      <Elevation elerank={props.elerank}></Elevation>
      <ChampionImage Image={props.Image}></ChampionImage>
      <ChampionName name={props.name}></ChampionName>
      <Tier tier={props.tier}></Tier>
      <Position position={props.position}></Position>
      <WinRate winRate={props.winRate}></WinRate>
      <PickRate pickRate={props.pickRate}></PickRate>
      <BanRate banRate={props.banRate}></BanRate>
      <ChampionRoundImage roundImage={props.roundImage}></ChampionRoundImage>
    </article>
  );
};

export default Card;
