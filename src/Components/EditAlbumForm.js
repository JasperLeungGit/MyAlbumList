import React from "react";

const EditAlbumForm = (props) => {
  return (
    <div>
      <form
        id="albumForm"
        className="albumForm"
        style={{
          maxWidth: "50vw",
          position: "fixed",
          transform: "translate(-25%, 0)",
        }}
        onSubmit={props.editAlbum.bind(this, props.albumID)}
      >
        <h3 className="font-weight-light">Edit Album Entry</h3>
        <br></br>
        <img
          src={props.artwork}
          alt=""
          style={{
            maxHeight: "10vh",
            maxWidth: "15vw",
            width: "auto",
            height: "auto",
            float: "left",
            marginRight: "3vw",
          }}
        />
        <h3 className="font-weight-bold">{props.artist + "-" + props.name}</h3>
        <br></br>
        <label htmlFor="sel1">Score </label>
        <select
          className="form-control"
          id="sel1"
          onChange={props.onChangeRating}
          defaultValue={props.rating}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br></br>
        <label htmlFor="review">Review</label>
        <textarea
          className="form-control"
          id="review"
          rows="4"
          spellcheck="false"
          onChange={props.onChangeReview}
          defaultValue={props.review}
        ></textarea>
        <br></br>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Update album entry
        </button>
        <br></br>
        <button
          className="btn btn-lg brn-primary btn-outline-danger"
          type="submit"
          onClick={props.cancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditAlbumForm;
