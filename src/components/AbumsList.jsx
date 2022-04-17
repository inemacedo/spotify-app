import React from "react";
import { useSelector } from "react-redux";
import Album from "./Album";

function AbumsList() {
  const albums = useSelector((state) => state);

  return (
    <div className="container">
      <h3></h3>
      <div className="row g-5">
        {albums.map((album) => (
          <div className="col-md-3" key={album.id}>
            <Album album={album} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AbumsList;
