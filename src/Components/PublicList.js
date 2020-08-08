import React, { useState, useEffect } from "react";
import PublicAlbumItem from "./PublicAlbumItem";
import ListService from "../Services/ListService";
import Message from "../Components/Message";

const PublicList = (props) => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [URL, setURL] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    setURL(window.location.href);
    setUsername(href);
    ListService.getList(href).then((data) => {
      if (data) setAlbums(data.albums);
      else setError(true);
    });
  }, []);
  if (!error) {
    return (
      <div>
        <br></br>
        <h3>{username}'s Album List</h3>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Album Art</th>
              <th>Name</th>
              <th>Artist</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return (
                <PublicAlbumItem
                  key={album._id}
                  artwork={album.artwork}
                  artist={album.artist}
                  name={album.name}
                  rating={album.rating}
                  review={album.review}
                />
              );
            })}
          </tbody>
        </table>
        <br></br>

        <h3>Share this list!</h3>

        <input
          id="link"
          type="text"
          name="link"
          className="form-control"
          defaultValue={URL}
          style={{ float: "left", width: "52vw" }}
        />

        <button
          className="btn btn-outline-success"
          onClick={() => {
            var copyText = document.getElementById("link");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            setMessage({
              msgBody: "Copied link to clipboard.",
              msgError: false,
            });
          }}
          style={{ marginBottom: "1vw" }}
        >
          Copy Link{" "}
        </button>
        {message ? <Message message={message} /> : null}
      </div>
    );
  } else {
    return (
      <div>
        <br></br>
        <h1>User not found</h1>
      </div>
    );
  }
};

export default PublicList;
