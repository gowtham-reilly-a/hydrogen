import React, { useContext } from "react";

import { Link } from "react-router-dom";

import NavigationContext from "../context/NavigationContext";

export default function IconLink({ icon, title, path }) {
  const { currentPage } = useContext(NavigationContext);

  console.log(currentPage, path);

  return (
    <Link
      to={path}
      className={`flex gap-3 items-center ${
        currentPage === path ? "text-skin-accent" : ""
      }`}
    >
      {icon}
      <p className="text-lg">{title}</p>
    </Link>
  );
}
