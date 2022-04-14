import React from "react";
import "../styles/Album.css";

function Album() {
  return (
    <div>
      <img
        className="album-image img-fluid shadow mb-2 bg-body rounded-3"
        src="https://upload.wikimedia.org/wikipedia/en/b/bf/This_Love_cover.png"
        alt="album.name"
      />
      <h3 className="fs-5 mt-1 text-secondary">This Love</h3>
    </div>
  );
}

export default Album;
