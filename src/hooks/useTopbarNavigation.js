import { useEffect, useContext } from "react";
import NavigationContext from "../context/NavigationContext";

const useTopbarNavigation = (title) => {
  const { setTopbarNavigation, setTabNavigationVisiblity, setTopbarTitle } =
    useContext(NavigationContext);

  useEffect(() => {
    setTopbarNavigation(true);
    setTopbarTitle(title || null);
    setTabNavigationVisiblity(false);

    return () => {
      setTopbarNavigation(false);
      setTopbarTitle(null);
      setTabNavigationVisiblity(true);
    };
  }, [setTopbarNavigation, setTabNavigationVisiblity, setTopbarTitle, title]);
};

export default useTopbarNavigation;
