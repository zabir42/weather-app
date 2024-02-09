import React from "react";
import HeaderLayout from "../layout/HeaderLayout";
import FavLocation from "./FavLocation";
import SearchLocation from "./SearchLocation";

function Header() {
  return (
    <HeaderLayout>
      <SearchLocation />
      <FavLocation />
    </HeaderLayout>
  );
}

export default Header;
