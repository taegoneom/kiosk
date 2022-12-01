import React, { useState } from "react";
import KioskHeader from "./KioskHeader";
import zustand from "zustand";
function Header() {
  return <div>{KioskHeader()}</div>;
}

export default Header;
