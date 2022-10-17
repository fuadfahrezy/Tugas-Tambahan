import React from "react";
import "./pages css/Post.css";

const Post = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card mt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
              className="card-img"
            ></img>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
