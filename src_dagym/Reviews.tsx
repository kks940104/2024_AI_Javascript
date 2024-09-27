import { CSSProperties } from "react";

export type ReviewsProps = {
  reviews: string;
};

const Reviews = (props: ReviewsProps) => {
  const ReviewsStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    lineHeight: "20px",
  };
  return <span style={ReviewsStyle}>{props.reviews}</span>;
};

export default Reviews;
