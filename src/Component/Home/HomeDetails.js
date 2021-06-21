import React from "react";
import { Button, Card } from "react-bootstrap";

const HomeDetails = ({ item }) => {
  // console.log(item);
  const { title, location, description,jobtype } = item;

  return (
    <div>
      <Card className='mb-4 mx-auto' style={{ width: "18rem",cursor:'pointer' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h6>{location}</h6>
          <h6>{jobtype}</h6>
          <Card.Text>{description}</Card.Text>
          <Button variant='success'>Apply Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeDetails;
