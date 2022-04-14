import React, { useState } from "react";
import axios from "axios";

function FilterByArtist() {
  return (
    <div>
      <form>
        <div className="mb-3 d-flex-justify-content-center">
          <label className="form-label visually-hidden">Search by artist</label>
          <input
            type="text"
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
