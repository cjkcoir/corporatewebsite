import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/images/img1.jpg";

function AppAbout() {
  return (
    <section id="about" className="about-block block">
      <Container fluid className="w-50">
        <Row>
        <div className="title-holder">
           <h4 className="text-center">About Us</h4> 
          <div className="subtitle text-center " >learn more about us</div>
        </div>
        </Row>
        <Row>
          <Col sm={6}>
            <img src={img1} alt="" className="w-100 h-100" />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              officia perspiciatis quidem maxime a repellendus aspernatur
              incidunt voluptate ad? Doloremque eligendi quidem esse quisquam
              corporis eos pariatur unde sunt, optio fuga vel dignissimos nisi
              magni architecto? Mollitia et atque recusandae, fugiat enim qui
              magnam eius facere ducimus quasi. Esse, enim!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
