import React from "react";
import { SunIcon } from "../icons/sun";

export const ThemeButton = ({ onClick }) => {
  return (
    <>
    <button className="fixed top-0 right-0 mt-6 mr-6" onClick={onClick}>
      <SunIcon />
    </button>
    </>
  );
};
