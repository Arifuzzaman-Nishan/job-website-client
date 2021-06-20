import React from "react";
import { Card } from "react-bootstrap";

const HomeDetails = ({ item }) => {
  console.log(item);
  const { title, companyName, location, description } = item;

  return (
    <div>
      <Card className='mb-4 mx-auto' style={{ width: "18rem",cursor:'pointer' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h6>{companyName}</h6>
          <h6>{location}</h6>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeDetails;
