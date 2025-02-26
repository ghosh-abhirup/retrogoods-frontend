"use client";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  click: Function;
}

const Button = ({ click, type = "button", children }: props) => {
  return (
    <button onClick={() => click()} type={type} className="common-button">
      {children}
    </button>
  );
};

export default Button;
