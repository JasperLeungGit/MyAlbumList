import React, { useState, useContext, useEffect } from "react";
import AlbumItem from "./AlbumItem";
import EditAlbumForm from "./EditAlbumForm";
import ListService from "../Services/ListService";
import { AuthContext } from "../Context/AuthContext";
import "./AlbumSearch.css";

const Albums = (props) => {
  const [albums, setAlbums] = useState([]);
  const authContext = useContext(AuthContext);
  const [id, setID] = useState("");
  const [artwork, setArtwork] = useState("");
  const [artist, setArtist] = useState("");
  const [name, setName] = useState("");
  var rating = "1";
  var review = "\n";

  useEffect(() => {
    ListService.getAlbums().then((data) => {
      setAlbums(data.albums);
    });
  }, []);

  const refreshList = () => {
    ListService.getAlbums().then((data) => {
      setAlbums(data.albums);
    });
  };

  const onChangeReview = (e) => {
    review = e.target.value;
  };

  const onChangeRating = (e) => {
    rating = e.target.value;
  };

  const displayForm = (id, artwork, name, artist, oldRating, oldReview) => {
    rating = oldRating;
    review = oldReview;
    setID(id);
    setArtwork(artwork);
    setName(name);
    setArtist(artist);
    document.getElementById("bgdim").style.display = "block";
    document.getElementById("albumForm").style.display = "block";
  };

  const cancel = (e) => {
    e.preventDefault();
    document.getElementById("bgdim").style.display = "none";
    document.getElementById("albumForm").reset();
    document.getElementById("albumForm").style.display = "none";
  };

  const deleteAlbum = (albumID) => {
    const id = { id: albumID };
    ListService.deleteAlbum(id).then((data) => {
      const { message } = data;
      if (!message.msgError) {
        console.log("album successfully deleted");
      } else if (message.msgBody === "UnAuthorized") {
        console.log("Error: UnAuthorized");
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        console.log("Error");
      }
    });
    refreshList();
  };

  const editAlbum = (albumID) => {
    const album = {
      name: name,
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
    const id = { id: albumID };
    ListService.deleteAlbum(id).then((data) => {
      const { message } = data;
      if (!message.msgError) {
        console.log("album successfully deleted");
      } else if (message.msgBody === "UnAuthorized") {
        console.log("Error: UnAuthorized");
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        console.log("Error");
      }
    });
    refreshList();
  };

  if (authContext.isAuthenticated) {
    return (
      <div>
        <br></br>
        <h3>My List</h3>
        <EditAlbumForm
          id="albumForm"
          albumID={id}
          artwork={artwork}
          name={name}
          artist={artist}
          rating={rating}
          review={review}
          onChangeRating={onChangeRating}
          onChangeReview={onChangeReview}
          editAlbum={editAlbum}
          cancel={cancel}
        ></EditAlbumForm>
        <div className="transbox" id="bgdim"></div>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Album Art</th>
              <th>Name</th>
              <th>Artist</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return (
                <AlbumItem
                  key={album._id}
                  id={album._id}
                  artwork={album.artwork}
                  artist={album.artist}
                  name={album.name}
                  rating={album.rating}
                  review={album.review}
                  displayForm={displayForm}
                  deleteAlbum={deleteAlbum}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else return <h1>You are not logged in. </h1>;
};

export default Albums;
