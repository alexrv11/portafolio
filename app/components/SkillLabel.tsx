import React from "react";

export const SkillLabel = ({text}) => {
  return (
    <span className="inline-flex m-1 items-center rounded-md px-2 py-1 text-xs font-medium bg-violet-950 text-violet-100 dark:bg-gray-50  dark:text-gray-700 ring-1 ring-inset ring-gray-500/10">
      {text}
    </span>
  );
};
