import React from "react";
import "./AlbumItem.css";

const PublicAlbumItem = (props) => (
  <tr>
    <td>
      {" "}
      <img
        src={props.artwork}
        alt=""
        style={{
          maxHeight: "10vh",
          maxWidth: "15vw",
          width: "auto",
          height: "auto",
        }}
      />
    </td>
    <td>
      <p>{props.name}</p>
    </td>
    <td>
      <p>{props.artist}</p>
    </td>
    <td>
      <p className="rating">{props.rating}</p>
    </td>
    <td>
      <p className="review">{props.review}</p>
    </td>
  </tr>
);

export default PublicAlbumItem;
