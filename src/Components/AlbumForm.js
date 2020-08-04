import React from "react";

const AlbumForm = (props) => {
  return (
    <form id="albumForm" className="albumForm">
      <label for="Review" className="sr-only">
        Review:{" "}
      </label>
      <input
        type="text"
        id="Review"
        className="form-control"
        placeholder="Enter Review"
      />
      <label for="sel1">Select list (select one) </label>
      <select class="form-control" id="sel1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Add to List
      </button>
    </form>
  );
};

export default AlbumForm;
