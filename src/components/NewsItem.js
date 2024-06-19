import React from "react";

function NewsItem(props) {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    style,
    author,
    publishedAt,
    source,
  } = props;
  return (
    <div
      className="box"
      style={{ backgroundColor: style.backgroundColor, color: style.color }}
    >
      <img src={imageUrl} alt="..." />
      <div className="card_body">
        <h5 className="card-title" style={{ color: style.color }}>
          {title}
        </h5>
        <p className="card-text">{description}</p>
        <a
          href={newsUrl}
          target="_blank"
          className="btn btn-primary"
          style={{
            backgroundColor: style.color,
            color: style.backgroundColor,
          }}
        >
          Read More
        </a>
      </div>
      <span className="author badge bg-danger">{source}</span>
      <p className="publishedAt">
        <small style={{ color: style.color }}>
          By {author ? author : "unknown"} on{" "}
          {publishedAt ? new Date(publishedAt).toUTCString() : "unknown"}
        </small>
      </p>
    </div>
  );
}

export default NewsItem;
