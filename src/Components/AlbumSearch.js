import React, { useState, useEffect } from "react";
import AlbumResult from "./AlbumResult";

const AlbumSearch = (props) => {
  const [albums, setAlbums] = useState([]);
  const [queryTerm, setQueryTerm] = useState([""]);
  const URL = "https://itunes.apple.com/";

  useEffect(() => {
    async function fetchItunes() {
      const response = await fetch(
        `${URL}search?term=${queryTerm}&entity=${"album"}&limit=${"100"}`
      );
      const data = await response.json();
      setAlbums(data.results);
    }
    fetchItunes();
  }, [queryTerm]);

  useEffect(() => {
    console.log(albums);
  }, [albums]);

  const onChange = (e) => {
    console.log(e.target.value);
    setQueryTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="search" className="sr-only">
          Search:{" "}
        </label>
        <input
          type="text"
          name="search"
          className="form-control"
          onChange={onChange}
          placeholder="Enter an album or artist name"
        />
      </form>

      <div>
        <h3>Results</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Album Art</th>
              <th>Name</th>
              <th>Artist</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return (
                <AlbumResult
                  artworkUrl100={album.artworkUrl100}
                  artistName={album.artistName}
                  collectionName={album.collectionName}
                  releaseDate={album.releaseDate}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlbumSearch;
