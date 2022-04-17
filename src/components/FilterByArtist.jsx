import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { uniqBy } from "lodash";

function FilterByArtist() {
  const [artistName, setArtistName] = useState([]);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     const getAlbums = async () => {
  // const response = await axios.get(
  //   `http://localhost:8000/api/albums`
  // )
  //     };
  //     getAlbums();
  //   });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const response = await axios.get(
      `http://localhost:8000/api/albums?artistName=${artistName}`
    );
    const artistAlbums = response.data.albums;
    console.log(artistAlbums);
    dispatch({
      type: "SET_ALBUMS",
      payload: uniqBy(artistAlbums, "name"),
    });
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
              type="text"
              value={artistName}
              onChange={(ev) => setArtistName(ev.target.value)}
              className="form-control w-100 mx-auto"
              placeholder="Search an artist...."
              style={{
                borderRadius: "10px",
                height: "45px",
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-10">
          Search
        </button>
      </form>
    </div>
  );
}

export default FilterByArtist;
