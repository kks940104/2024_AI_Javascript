import Card from "./Card/Card";
import { championImageProps } from "./Champion/ChampionImage";
import { championNameProps } from "./Champion/ChampionName";
import { championRoundImageProps } from "./Champion/ChampionRoundImage";
import { championRankingList } from "./Data/data";
import { positionProps } from "./Position/Position";
import { elevationProps } from "./Rank/Elevation";
import { rankProps } from "./Rank/Rank";
import { banRateProps } from "./Rate/BanRate";
import { pickRateProps } from "./Rate/PickRate";
import { winRateProps } from "./Rate/WinRate";
import { tierProps } from "./Tier/Tier";

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

const rankElevation = (rank_prev: number, rank_prev_patch: number | null) => {
  return rank_prev_patch ? rank_prev_patch - rank_prev : rank_prev;
};

const OpggLayout = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section
        style={{
          width: "100%",
          maxWidth: "1080px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        {championRankingList.map((x) => (
          <Card
            Image={x.image_url}
            banRate={x.positionBanRate}
            elerank={rankElevation(
              x.positionTierData.rank_prev,
              x.positionTierData.rank_prev_patch
            )}
            name={x.name}
            pickRate={x.positionPickRate}
            position={
              "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925"
            }
            rank={x.positionRank}
            tier={x.positionTier}
            winRate={x.positionWinRate}
            roundImage={x.image_url}
          ></Card>
        ))}
      </section>
    </main>
  );
};

export default OpggLayout;
