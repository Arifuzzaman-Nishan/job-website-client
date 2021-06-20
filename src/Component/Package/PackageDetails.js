import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { postContext } from "../../App";

const PackageDetails = ({ item }) => {

  const { name, description, moreDes, price } = item;
  const history = useHistory();

  // use context api
  const [postDetails,setPostDetails] = useContext(postContext);

  // useEffect(() => {
  //   fetch('http://localhost:5000/employer',{
  //     method: 'POST',
  //     headers:{'content-type':'application/json'},
  //     body: JSON.stringify(postDetails)


  //   })

  // },[])

  const handleChange = (selectItem) => {

    const {name,price} = selectItem;
    setPostDetails({...postDetails,
      packageName: name,
      price: price
    })

    // console.log(selectItem);
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
