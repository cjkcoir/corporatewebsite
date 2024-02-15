import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AppServices() {
  const servicesData = [
    {
      id: 1,
      icon: "fas fa-clone",
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 2,
      icon: "fas fa-snowflake",
      title: "Creative Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 3,
      icon: "fas fa-plug",
      title: "SEO Optimized",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 4,
      icon: "fas fa-desktop",
      title: "Retina Ready",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 5,
      icon: "fas fa-trophy",
      title: "Brower Compatibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 6,
      icon: "fas fa-life-ring",
      title: "Customer Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
  ];

  return (
    <>
      <section className="services block-services">
        <Container fluid>
          <div className="title-holder text-center fw-bolder">
            Our Services
            <div className="subtitle">Services We Provided</div>
          </div>
          <Row>
            {servicesData.map((service) => {
              return (
                <Col sm={4} className="holder" key={service.id}>
                  <div className="icon">
                    {" "}
                    <i className={service.icon}></i>{" "}
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AppServices;
