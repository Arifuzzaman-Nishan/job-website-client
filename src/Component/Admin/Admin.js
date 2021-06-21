import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import AllPostList from "./AllPostList";

const Admin = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allPost")
      .then((res) => res.json())
      .then((data) => setAllPost(data));
  }, []);

  console.log(allPost);

  return (
    <Container>
      <Table striped hover className="bg-white">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Job Location</th>
            <th>Job Category</th>
            <th>Job Type</th>
            <th>Status</th>
          </tr>
        </thead>
        {allPost.map((item) => (
          <AllPostList item={item} key={item._id}></AllPostList>
        ))}
      </Table>
    </Container>
  );
};

export default Admin;
