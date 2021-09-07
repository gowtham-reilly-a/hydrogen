import React, { useContext } from "react";

import PrimaryHeader from "./PrimaryHeader";
import SecondaryHeader from "./SecondaryHeader";
import NavigationContext from "../../context/NavigationContext";

export default function Header() {
  const { topbarNavigation } = useContext(NavigationContext);

  return topbarNavigation ? <SecondaryHeader /> : <PrimaryHeader />;
}
