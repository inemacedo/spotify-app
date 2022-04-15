import React, { useEffect, useState } from "react";
import axios from "axios";

function FilterByArtist() {
  const [artistName, setArtistName] = useState([]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const getAlbums = async () => {
      const response1 = await axios.get(
        `https://api.spotify.com/v1/search?q=artist:${artistName}&type=artist`,
        {
          headers: {
            Authorization:
              "Bearer BQDMWoSJuj5YQSFB1fxZrL8IJXw2h6PFar1k_sdWQJoJEMqBHhKjpK00P2-utTRd6gXr4LwEyyb8_-gyF2M-93cibm-7pEg9f586RCCveg6yufCIrjNsQB7AKha6OldnGmWA6yA",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const artistId = response1.data.artists.items[0].id;
      console.log(artistId);

      // const response2 = await axios.get(
      //   `https://api.spotify.com/v1/artists/${artistId}/albums`,
      //   {
      //     headers: {
      //       Authorization:
      //         "Bearer BQDMWoSJuj5YQSFB1fxZrL8IJXw2h6PFar1k_sdWQJoJEMqBHhKjpK00P2-utTRd6gXr4LwEyyb8_-gyF2M-93cibm-7pEg9f586RCCveg6yufCIrjNsQB7AKha6OldnGmWA6yA",
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //   }
      // );
      // const artistAlbums = response2.data.artists.items;
      // console.log(artistAlbums);
    };
    getAlbums();
    console.log(ev);
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
