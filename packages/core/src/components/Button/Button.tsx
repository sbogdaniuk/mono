import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import hot from "../../images/hot.svg";
import "./Button.scss";

export type TButtonProps = {
  rounded?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, rounded, ...rest }: TButtonProps) => (
  <div>
    <button className={cn("button", className, { "button--rounded": rounded })} {...rest} />
    <img src={hot} alt="hot" />
  </div>
);
