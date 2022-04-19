import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { uniqBy } from "lodash";
import "../styles/FilterByArtist.css";

function FilterByArtist() {
  const [artistName, setArtistName] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setLoading(true);

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/albums?artistName=${artistName}`
    );
    const artistAlbums = response.data.albums;
    console.log(artistAlbums);
    dispatch({
      type: "SET_ALBUMS",
      payload: uniqBy(artistAlbums, "name"),
    });

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <div className="row mb-3 d-flex justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-4">
            <label className="form-label visually-hidden">
              Search by artist
            </label>
            <input
              disabled={loading}
              type="text"
              value={artistName}
              onChange={(ev) => setArtistName(ev.target.value)}
              className="search-box form-control w-100 mx-auto"
              placeholder="Search an artist...."
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="search-btn btn btn-primary w-10"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default FilterByArtist;
