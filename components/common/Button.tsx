"use client";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  click: () => {};
}

const Button = ({ click, children }: props) => {
  return (
    <button onClick={click} className="common-button">
      {children}
    </button>
  );
};

export default Button;
