import React from "react";
import Card from "../Card/Card";

const End = ({ url, src }) => {
  return (
    <Card>
      <div className="wrapper">
        <div className="img-wrapper">
          <img src={src} alt="" />
        </div>
        <div className="link-wrapper">
          <span className="">
            <strong>Link: </strong>
          </span>
          <p className="link">{url}</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(url);
              alert("Link copied to clipboard");
            }}
          >
            Copy
          </button>
        </div>
      </div>
    </Card>
  );
};

export default End;
