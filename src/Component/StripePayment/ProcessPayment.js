import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import React, { useContext, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { postContext } from "../../App";
import "./ProcessPayment.css";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const ProcessPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const history = useHistory();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const [postDetails, setPostDetails] = useContext(postContext);
  console.log(postDetails);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);


      fetch("https://frozen-chamber-29591.herokuapp.com/employerPayment", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...postDetails,
          payment: "success",
        }),
      }).then((res) => {
        if (res) {
          history.replace("/jobpost");
        }
      });

      setPaymentError(null);

      elements.getElement(CardNumberElement).clear();
      elements.getElement(CardExpiryElement).clear();
      elements.getElement(CardCvcElement).clear();
    }
  };

  const handleRemoveText = () => {
    setPaymentSuccess(null);
    setPaymentError(null);
  };

  // paymentSuccess?

  return (
    <div>
      <form
        className="m-auto"
        style={{ width: "18rem" }}
        onSubmit={handleSubmit}
      >
        <label>
          Card number
          <CardNumberElement onFocus={handleRemoveText} options={options} />
        </label>
        <br />
        <label>
          Expiration date
          <CardExpiryElement options={options} />
        </label>
        <br />
        <label>
          CVC
          <CardCvcElement options={options} />
        </label>
        <br />
        <h6 className="text-success">
          Your Service charged will be {postDetails.price}
        </h6>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && (
        <div className="mt-4 alert alert-danger">
          <strong className="mr-3">Error!</strong>
          {paymentError}
        </div>
      )}
      {paymentSuccess && (
        <div className="mt-4 alert alert-success">
          <strong className="mr-3">Successfully</strong>
          Payment done
        </div>
      )}
    </div>
  );
};

export default ProcessPayment;
