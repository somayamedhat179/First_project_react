import React from "react";
import Navbar from "../Home/Navbar";
import Contact from "./Contact";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

function AllDownload() {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      <br></br>
      <div style={{display:"flex",justifyContent:"space-evenly" , marginBottom:"50px"}} >
        <Card
        color="light"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s
            content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card
        color="light"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s
            content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card
        color="light"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s
            content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
    </div>
  );
}

export default AllDownload;
