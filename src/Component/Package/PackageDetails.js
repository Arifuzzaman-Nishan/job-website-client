import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { postContext } from "../../App";

const PackageDetails = ({ item }) => {
  const { name, description, moreDes, price } = item;
  const history = useHistory();

  // use context api
  const [postDetails, setPostDetails] = useContext(postContext);
  // const [data, setData] = useState({ name: "", price: "" });

  const handleClick = (name, price) => {
    // console.log(name, price);


    setPostDetails({...postDetails,name,price});

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
                onClick={() => handleClick(name, price)}
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
