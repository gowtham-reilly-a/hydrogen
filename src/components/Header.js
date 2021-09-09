import React, { useContext } from "react";

import { IoSearchOutline } from "react-icons/io5";

import NavigationContext from "../context/NavigationContext";

export default function Header() {
  const { setIsModalVisible, setModalType } = useContext(NavigationContext);
  return (
    <header className="w-full bg-gray-800 text-white h-12 px-6 flex items-center border-b border-black">
      <IoSearchOutline
        size="1.5rem"
        onClick={() => {
          setIsModalVisible(true);
          setModalType("search");
        }}
      />
    </header>
  );
}
