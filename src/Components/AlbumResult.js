import React from "react";

// test change
const AlbumResult = (props) => (
  <tr>
    <td>
      {" "}
      <img src={props.artworkUrl100} />
    </td>
    <td>{props.collectionName}</td>
    <td>{props.artistName}</td>
    <td>
      Edit
      {/* <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a> */}
    </td>
  </tr>
);

export default AlbumResult;
