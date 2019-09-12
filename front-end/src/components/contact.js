import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const Contact = () => {
  return (
    <Container
      text
      style={{
        textAlign: "justify",
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}
    >
      <Header
        as="h1"
        textAlign="center"
        style={{ textDecoration: "underline" }}
      >
        Contact
      </Header>
      <div style={{ padding: "2.85em 0em" }}>
        <Image
          style={{ paddingLeft: "1px" }}
          src={require("../Images/xabi-piano-00.jpg")}
          size="large"
          floated="left"
        />
        <p className="p-review">To get in touch:</p>
        <p className="p-review">
          Mobile phone: <br />
          07539 175 029
        </p>
        <p className="p-review">Email: xabi.casan.piano@gmail.com</p>
        <p className="p-review">
          Studio:
          <br /> SE1 3GU, London Bridge.
        </p>

        <p className="p-review">Sign up or log in for more content!</p>
      </div>
    </Container>
  );
};
export default Contact;
