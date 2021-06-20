import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const PackageDetails = ({ item }) => {
  const { name, description, moreDes, price } = item;
  const history = useHistory();

  const handleChange = (selectItem) => {
    console.log(selectItem);
    history.replace('/payment');
  };

  return (
    <div>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <h4 className="text-center">{name}</h4>
            <br />
            <h6>{description}</h6>
            <p>{moreDes}</p>
            <h6>Price: {price}</h6>
            <br />
            <div className="d-flex justify-content-center">
              <Button
                onClick={() => handleChange({ name: name, price: price })}
                variant="primary"
              >
                Buy package
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default PackageDetails;
