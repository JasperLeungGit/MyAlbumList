import React from "react";
import "./AlbumItem.css";

const AlbumResult = (props) => (
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
    <td>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{ marginRight: "0.5vw" }}
        onClick={props.displayForm.bind(
          this,
          props.id,
          props.artwork,
          props.name,
          props.artist,
          props.rating,
          props.review
        )}
      >
        Edit
      </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={props.deleteAlbum.bind(this, props.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default AlbumResult;
