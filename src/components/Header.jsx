import React from "react";
import "../styles/Header.css";
import FilterByArtist from "./FilterByArtist";

function Header() {
  return (
    <div className="header-background d-flex flex-column align-items-center justify-content-center">
      <div className="container">
        <h1 className="text-white mb-0 fw-bold">Houlakify</h1>
        <h2 className="text-white fs-4 mb-3">Your favourite albums</h2>
        <FilterByArtist />
      </div>
    </div>
  );
}

export default Header;
