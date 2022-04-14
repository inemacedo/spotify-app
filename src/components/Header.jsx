import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header-background d-flex flex-column align-items-center justify-content-center">
      <div className="container ">
        <h1 className="text-white fs-2 mb-3">Your favourite music</h1>
        <form action="">
          <input
            className="w-25 rounded-pill px-3 py-2 border-0"
            type="text"
            placeholder="Search by artist..."
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
