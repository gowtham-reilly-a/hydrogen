import React, { useContext } from "react";

import { Link } from "react-router-dom";

import NavigationContext from "../context/NavigationContext";

export default function IconLink({ icon, title, path }) {
  const { currentPage } = useContext(NavigationContext);

  return (
    <Link
      to={path}
      className={`flex flex-col items-center ${
        currentPage === path ? "text-blue-500" : ""
      }`}
    >
      {icon}
      <p className="text-xs">{title}</p>
    </Link>
  );
}
