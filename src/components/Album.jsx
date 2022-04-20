import React from "react";
import "../styles/Album.css";

function Album({ album }) {
  return (
    <div className="px-3 py-4">
      <img
        className="album-image img-fluid shadow mb-3 bg-body rounded-3"
        src={album.images[0].url}
        alt={album.name}
      />
      <h3 className="fs-5 mt-1 text-secondary">{album.name}</h3>
    </div>
  );
}

export default Album;
