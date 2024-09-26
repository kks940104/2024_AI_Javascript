import { CSSProperties } from "react";
import Card from "./Card";
import Album from "./Album";
import Img from "./Img";
import Info from "./Info";
import Category from "./Category";
import Price from "./Price";
import data from "./data";
import Service from "./Service";
import GymName from "./Gymname";

const Cl = data.result.centerList;
const Container = () => {
  const cssStyle: CSSProperties = {
    width: "100%",
    maxWidth: "1000px",
    margin: " 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  };

  const realPrice = (
    isLowestPrice: boolean,
    lowestPrice: number,
    originalPrice: number,
    priceType: string,
    count: number | null,
    period: number | null
  ): number => {
    const price = isLowestPrice ? lowestPrice : originalPrice;

    if (priceType == "period") {
      if (period) {
        const Price1 = Math.floor(price / period);
        return Price1 - (Price1 % 10);
      }
    } else {
      if (count) {
        const Price1 = Math.floor(price / count);
        return Price1 - (Price1 % 10);
      }
    }

    return 0; // 기본값 반환
  };

  return (
    <section style={cssStyle}>
      {Cl.map((gymData) => (
        <Card>
          <Album>
            <Img src={gymData.gymPhotoSmall} />
          </Album>
          <Info>
            <Category
              color="#999fa9"
              fontSize="12px"
              text={gymData.tags.join("/")}
            />
            <GymName fontWeight="bold" text={gymData.gymName} />
            <Price
              fontSize="20px"
              fontWeight="bold"
              text={`${realPrice(
                gymData.price.isLowestPrice,
                gymData.price.lowestPrice,
                gymData.price.originalPrice,
                gymData.price.priceType,
                gymData.price.count,
                gymData.price.period
              )}원~/월`}
            />
            <Service fontSize="12px" text={gymData.service.free} />
          </Info>
        </Card>
      ))}
    </section>
  );
};

export default Container;
