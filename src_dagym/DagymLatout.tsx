import Card from "./Card";
import { centerList } from "./data";

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
  return 0;
};

const DagymLatout = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        {centerList.map((v) => (
          <Card
            image={v.gymPhotoSmall}
            gymName={v.gymName}
            address={v.address}
            price={realPrice(
              v.price.isLowestPrice,
              v.price.lowestPrice,
              v.price.originalPrice,
              v.price.priceType,
              v.price.count,
              v.price.period
            )}
            reviews={`${v.review.count}`}
            starRage={`${v.review.rate}`}
            text={"일일권"}
            categories={v.tags.join("/")}
            service={v.service.free}
          />
        ))}
      </section>
    </main>
  );
};

export default DagymLatout;
