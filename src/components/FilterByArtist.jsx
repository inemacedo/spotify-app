import React, { useState } from "react";
import axios from "axios";

function FilterByArtist() {
  const [artistName, setArtistName] = useState([]);
  const [albums, setAlbums] = useState([]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const response = await axios.get(
      `http://localhost:8000/api/albums?artistName=${artistName}`
    );
    const artistAlbums = response.data.albums;
    console.log(artistAlbums);
    setAlbums(response.data.albums);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex-justify-content-center">
          <label className="form-label visually-hidden">Search by artist</label>
          <input
            type="text"
            value={artistName}
            onChange={(ev) => setArtistName(ev.target.value)}
            className="form-control w-25 mx-auto"
            placeholder="Search by artist...."
          />
        </div>
        <button type="submit" className="btn btn-success w-10">
          Search
        </button>
      </form>
    </div>
  );
}

export default FilterByArtist;
