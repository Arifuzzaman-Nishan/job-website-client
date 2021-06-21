import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { postContext } from "../../App";
import PostDetails from "./PostDetails";

const ShowJobPostList = () => {
  const [postDetails, setPostDetails] = useContext(postContext);
  const [specificPost, setSpecificPost] = useState([]);

  console.log(postDetails);

  useEffect(() => {
    fetch("https://frozen-chamber-29591.herokuapp.com/specificPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: postDetails.email }),
    })
      .then((res) => res.json())
      .then((data) => setSpecificPost(data));
  }, []);

  console.log(specificPost);

  return (
    <div>
        <h2 className='text-center my-5 py-5'>your job post list</h2>
      <Row>
          {
              specificPost.map((item,key) => <PostDetails key={key} item={item}></PostDetails>)
          }
      </Row>
    </div>
  );
};

export default ShowJobPostList;
