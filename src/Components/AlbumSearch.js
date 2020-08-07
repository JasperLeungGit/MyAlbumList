import React, { useState, useEffect, useContext } from "react";
import AlbumResult from "./AlbumResult";
import AlbumForm from "./AlbumForm";
import ListService from "../Services/ListService";
import { AuthContext } from "../Context/AuthContext";
import "./AlbumSearch.css";

const AlbumSearch = (props) => {
  const [albums, setAlbums] = useState([]);
  const [queryTerm, setQueryTerm] = useState([""]);
  const [artwork, setArtwork] = useState("");
  const [artist, setArtist] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [rating, setRating] = useState("1");
  var review = "\n";
  const URL = "https://itunes.apple.com/";
  const authContext = useContext(AuthContext);

  useEffect(() => {
    async function fetchItunes() {
      const response = await fetch(
        `${URL}search?term=${queryTerm}&entity=${"album"}&limit=${"50"}`
      );
      const data = await response.json();
      setAlbums(data.results);
    }
    fetchItunes();
  }, [queryTerm]);

  const onChange = (e) => {
    setQueryTerm(e.target.value);
  };

  const onChangeReview = (e) => {
    review = e.target.value;
  };

  const onChangeRating = (e) => {
    setRating(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const addToList = (e) => {
    e.preventDefault();
    const album = {
      name: albumName,
      artist: artist,
      artwork: artwork,
      rating: rating,
      review: review,
    };
    ListService.postAlbum(album).then((data) => {
      const { message } = data;
      if (!message.msgError) {
        console.log("album successfully posted");
      } else if (message.msgBody === "UnAuthorized") {
        console.log("Error: UnAuthorized");
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        console.log("Error");
      }
    });
    document.getElementById("bgdim").style.display = "none";
    document.getElementById("albumForm").reset();
    document.getElementById("albumForm").style.display = "none";
  };

  const cancel = (e) => {
    e.preventDefault();
    document.getElementById("bgdim").style.display = "none";
    document.getElementById("albumForm").reset();
    document.getElementById("albumForm").style.display = "none";
  };

  const displayForm = (artwork, albumName, artist) => {
    setArtwork(artwork);
    setAlbumName(albumName);
    setArtist(artist);
    document.getElementById("bgdim").style.display = "block";
    document.getElementById("albumForm").style.display = "block";
  };

  if (authContext.isAuthenticated) {
    return (
      <div>
        <br></br>
        <AlbumForm
          id="albumForm"
          artwork={artwork}
          albumName={albumName}
          artist={artist}
          addToList={addToList}
          onChangeRating={onChangeRating}
          onChangeReview={onChangeReview}
          cancel={cancel}
        ></AlbumForm>
        <div className="transbox" id="bgdim"></div>

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
          <small id="passwordHelpBlock" className="form-text text-muted">
            If you type too fast the search might not work lol
          </small>
        </form>

        <div>
          <h3>Results</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Album Art</th>
                <th>Name</th>
                <th>Artist</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {albums.map((album) => {
                return (
                  <AlbumResult
                    key={album.collectionId}
                    artworkUrl100={album.artworkUrl100}
                    artistName={album.artistName}
                    collectionName={album.collectionName}
                    releaseDate={album.releaseDate}
                    displayForm={displayForm}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else return <h1>You must be logged in to search for albums.</h1>;
};

export default AlbumSearch;
