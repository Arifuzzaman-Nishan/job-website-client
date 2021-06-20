import React from "react";
import { Container, Row } from "react-bootstrap";
import PackageDetails from "./PackageDetails";

const Package = () => {
  const cardFakeData = [
    {
      name: "Premium",
      description: "You will be able to post 10 hours per month",
      moreDes:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorum molestias inventore veritatis. Eveniet quae distinctio sit alias neque aliquid ipsum, eos asperiores officia quasi omnis perferendis, ullam delectus eius.",
      price: "$90",
    },
    {
      name: "Standard",
      description: "You will be able to post 20 hours per month",
      moreDes:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorum molestias inventore veritatis. Eveniet quae distinctio sit alias neque aliquid ipsum, eos asperiores officia quasi omnis perferendis, ullam delectus eius.",
      price: "$70",
    },
    {
      name: "Basic",
      description: "You will be able to post 30 hours per month",
      moreDes:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorum molestias inventore veritatis. Eveniet quae distinctio sit alias neque aliquid ipsum, eos asperiores officia quasi omnis perferendis, ullam delectus eius.",
      price: "$50",
    },
  ];
  
  return (
    <Container>
      <Row className='mt-5'>
        {cardFakeData.map((item, key) => (
          <PackageDetails key={key} item={item}></PackageDetails>
        ))}
      </Row>
    </Container>
  );
};

export default Package;
