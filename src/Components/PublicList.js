import React, { useState, useEffect } from "react";
import PublicAlbumItem from "./PublicAlbumItem";
import ListService from "../Services/ListService";
import { AuthContext } from "../Context/AuthContext";

const PublicList = (props) => {
  const [albums, setAlbums] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    setUsername(href);
    ListService.getList(href).then((data) => {
      setAlbums(data.albums);
    });
  }, []);

  return (
    <div>
      <br></br>
      <h3>{username}'s Album List</h3>
      <table className="table">
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
    </div>
  );
};

export default PublicList;
