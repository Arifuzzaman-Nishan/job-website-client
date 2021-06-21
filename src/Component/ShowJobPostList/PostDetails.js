import React from "react";
import { Card, Col } from "react-bootstrap";

const PostDetails = ({ item }) => {
  const { title, location, description, status } = item;
  console.log(item);
  return (
    <Col md={6}>
      <Card className='mb-5 text-center' style={{ width: "18rem" }}>
        <Card.Body>
          <h4>{title}</h4>

          <Card.Text>
            <h6>{location}</h6>
            <p>{description}</p>
            <h6>status: {status}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostDetails;
