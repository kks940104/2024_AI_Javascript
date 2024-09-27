import { CSSProperties } from "react";

export type CategoryProps = {
  categories: string;
};

const CategoryList = (props: CategoryProps) => {
  const CategoryStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    fontWeight: "blod",
    lineHeight: "20px",
  };
  return <span style={CategoryStyle}>{props.categories}</span>;
};

export default CategoryList;
