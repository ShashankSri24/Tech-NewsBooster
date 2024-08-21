import React from "react";
import { useCustomHook } from "./context";
const Fetch = () => {
  const { hits, isLoading, removePost } = useCustomHook();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="post">
        {hits.map((currpost) => {
          const { title, author, objectID, num_comments, url } = currpost;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span> {num_comments} </span>{" "}
                comments{" "}
              </p>
              <div className="card-btn">
                <a href={url} target="blank">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Fetch;
