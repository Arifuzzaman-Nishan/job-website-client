import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Container } from "react-bootstrap";
import ProcessPayment from "./ProcessPayment";

const stripePromise = loadStripe(
  "pk_test_51IeR1DBqk7A6FGoihILlnb6K5upwovEy0jozWTRMbXdZWyFnKbErD5cHHuKJFNQWZvKAtvcnwOnKg42JHN7keTSg00ViHYTScT"
);

const StripePayment = () => {



  return (
    <Container className="mt-4">

      {/* stripe payment gateway system */}
      <div>
        <Elements stripe={stripePromise}>
          <ProcessPayment></ProcessPayment>
        </Elements>
      </div>
    </Container>
  );
};

export default StripePayment;
