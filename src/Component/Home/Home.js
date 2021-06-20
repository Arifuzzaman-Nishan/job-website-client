import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../Filter/Filter";
import HomeDetails from "./HomeDetails";

const Home = () => {
  const fakeData = [
    {
      title: "Junior web Developer",
      companyName: "Decisive Data systems",
      location: "Burtonsvile, MD 20866",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt?",
    },
    {
      title: "Junior web Developer",
      companyName: "Decisive Data systems",
      location: "Burtonsvile, MD 20866",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt?",
    },
  ];
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Filter></Filter>
        </Col>
        <Col className="border border-danger" md={8}>
          {fakeData.map((item, key) => (
            <HomeDetails key={key} item={item} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
