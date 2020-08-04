import React from "react";

const AlbumResult = (props) => (
  <tr>
    <td>
      {" "}
      <img src={props.artworkUrl100} />
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
