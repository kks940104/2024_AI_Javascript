import { CSSProperties } from "react";
import Album, { AlbumProps } from "./Album";
import CategoryList, { CategoryProps } from "./CategoryList";
import Gymname, { GymnameProps } from "./Gymname";
import StarRage, { StarRateProps } from "./StarRate";
import Reviews, { ReviewsProps } from "./Reviews";
import Address, { AddressProps } from "./Address";
import Tag, { TagProps } from "./Tag";
import Price, { PriceProps } from "./Price";

export type cardUpperProps = AlbumProps &
  CategoryProps &
  GymnameProps &
  StarRateProps &
  StarRateProps &
  AddressProps &
  TagProps &
  PriceProps &
  ReviewsProps;

const CardUpper = (props: cardUpperProps) => {
  const CardUpperStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
  };

  const rightStyle: CSSProperties = {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "3px",
  };

  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <div style={CardUpperStyle}>
      <Album image={props.image}></Album>
      <div style={rightStyle}>
        <div style={infoStyle}>
          <CategoryList categories={props.categories}></CategoryList>
          <Gymname gymName={props.gymName}></Gymname>
          <div>
            <StarRage starRage={`★ ${props.starRage}`}></StarRage>
            <Reviews reviews={` (${props.reviews}) `}></Reviews>
            <Address address={props.address}></Address>
          </div>
        </div>

        <div style={eventStyle}>
          <Tag text={props.text} />
          <Price price={props.price} />
        </div>
      </div>
    </div>
  );
};

export default CardUpper;
