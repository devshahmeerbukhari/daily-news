import React, { Component } from "react";
export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date} = this.props;
    return (
      <div className={`container`}>
        <div
          className={`card ${mode === "dark" ? "bg-dark" : "bg-light"} text-${
            mode === "light" ? "dark" : "light"
          }`}
        >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              className={`btn ${
                mode === "light" ? "btn-primary" : "btn-secondary"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
