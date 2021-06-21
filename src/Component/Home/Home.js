import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import HomeDetails from "./HomeDetails";

const Home = () => {
  const jobTag = [
    { name: "web developer" },
    { name: "frontend developer" },
    { name: "backend developer" },
    { name: "marketing" },
    { name: "full stack developer" },
  ];
  const { Option } = Select;

  const [successPost, setSuccessPost] = useState([]);
  const [filterPost, setFilterPost] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    fetch("https://frozen-chamber-29591.herokuapp.com/sucessPost")
      .then((res) => res.json())
      .then((data) => setSuccessPost(data));
  }, []);

  function handleChange(value) {
    value.forEach((element) => {
      console.log(element);
      const newFilter = successPost.find((item) => {
        return item.title.toLowerCase() === element.toLowerCase();
      });

      setFilterPost([...filterPost, newFilter]);
      setIsFilter(true);
    });
  }

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <h3 className="text-center">Filters</h3>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Tags Mode"
              onChange={handleChange}
            >
              {jobTag.map((item) => {
                return <Option key={item.name}>{item.name}</Option>;
              })}
            </Select>
          </Card>
        </Col>
        <Col className="" md={8}>
          {isFilter
            ? filterPost.map((item, key) =>
                item ? (
                  <HomeDetails key={key} item={item} />
                ) : (
                  <h1> not found </h1>
                )
              )
            : successPost.map((item, key) => (
                <HomeDetails key={key} item={item} />
              ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
