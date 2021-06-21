import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../Filter/Filter";
import HomeDetails from "./HomeDetails";

const Home = () => {

  const [successPost,setSuccessPost] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/sucessPost')
    .then(res => res.json())
    .then(data => setSuccessPost(data))
  },[])

  console.log(successPost);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Filter></Filter>
        </Col>
        <Col className="" md={8}>
          {successPost.map((item,key) => (
            <HomeDetails key={key} item={item} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
