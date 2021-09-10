import React, { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import NavigationContext from "../context/NavigationContext";

const MenuSearch = (props) => {
  const { setIsModalVisible, setModalType } = useContext(NavigationContext);

  return (
    <IoSearchOutline
      size="1.5rem"
      onClick={() => {
        setIsModalVisible(true);
        setModalType("search");
      }}
      {...props}
    />
  );
};

export default MenuSearch;
