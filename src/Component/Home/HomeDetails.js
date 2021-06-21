import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const HomeDetails = ({ item }) => {
  // console.log(item);
  const { title, location, description,jobtype } = item;
  const history = useHistory();

  console.log(history);

  return (
    <div>
      <Card className='mb-4 mx-auto' style={{ width: "18rem",cursor:'pointer' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h6>{location}</h6>
          <h6>{jobtype}</h6>
          <Card.Text>{description}</Card.Text>
          <Button onClick={() => history.push('/jobapply')} variant='success'>Apply Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeDetails;
