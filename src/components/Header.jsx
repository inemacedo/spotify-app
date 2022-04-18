import React from "react";
import { useSelector } from "react-redux";
import "../styles/Header.css";
import FilterByArtist from "./FilterByArtist";

function Header() {
  const albums = useSelector((state) => state);
  const withAlbums = albums.length > 0 ? "with-albums" : "";

  return (
    <div
      className={`header-background ${withAlbums} d-flex flex-column align-items-center justify-content-center`}
    >
      <div className="container">
        <h1 className="text-white mb-0 fw-bold">Houlakify</h1>
        <h2 className="text-white fs-4 mb-3">Your favourite albums</h2>
        <FilterByArtist />
      </div>
    </div>
  );
}

export default Header;
