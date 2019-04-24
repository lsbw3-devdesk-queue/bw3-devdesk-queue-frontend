import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const Restaurant = props => {
  const tacos = [taco1, taco2, taco3, taco4];
  return (
    <div>
      <Card >
        <CardBody>
          <h3>{props.question.topic}</h3>
          <h3>{props.question.content}</h3>
          <h3>{props.question.answered}</h3>
        </CardBody>
      </Card>
    </div>
  );
};

export default Restaurant;