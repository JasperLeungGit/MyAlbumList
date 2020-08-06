import React from "react";

const AlbumResult = (props) => (
  <tr>
    <td>
      {" "}
      <img
        src={props.artworkUrl100}
        alt=""
        style={{
          maxHeight: "10vh",
          maxWidth: "15vw",
          width: "auto",
          height: "auto",
        }}
      />
    </td>
    <td>{props.collectionName}</td>
    <td>{props.artistName}</td>
    <td>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={props.displayForm.bind(
          this,
          props.artworkUrl100,
          props.collectionName,
          props.artistName
        )}
      >
        Add
      </button>
    </td>
  </tr>
);

export default AlbumResult;
