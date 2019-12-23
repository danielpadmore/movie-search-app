import React from "react";
import classes from "./card.module.scss";

type Props = {
  children: React.ReactNode;
};
const Card = ({ children }: Props) => {
  return <div className={classes.container}>{children}</div>;
};

export default Card;
