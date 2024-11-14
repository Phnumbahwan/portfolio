import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import buyLife from "../../Assets/Projects/buyLife.png";
import hoops from "../../Assets/Projects/hoops.png";
import suicide from "../../Assets/Projects/suicide.png";
import gownRentalApp from "../../Assets/Projects/gownRentalApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoops}
              isBlog={false}
              title="Hoops"
              description="This app is a score point system that enables users to create two teams, compete, and track points in real-time. It’s built for quick team setup, easy score management, and seamless competition, making it ideal for events, games, or friendly matches."
              ghLink="https://github.com/Phnumbahwan/Hoops"
              demoLink="https://hoops-g.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gownRentalApp}
              isBlog={false}
              title="Gown Rental App"
              description="This Gown Rental app, developed using ReactJS and Laravel with PWA capabilities, enables users to browse, rent, and track gown availability conveniently on their phones. The app lists all rented items, displays each item’s return date, and facilitates in-app payments for seamless transactions."
              ghLink="https://github.com/Phnumbahwan/gown-rent-ui"
              demoLink="https://marysbridal.shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buyLife}
              isBlog={false}
              title="Buy Life"
              description="This POS app, built with ReactJS and Laravel, streamlines business operations by providing comprehensive billing, employee management, inventory tracking, and reporting features. The app is designed to manage transactions efficiently, track stock levels, oversee employee activities, and generate reports for business insights."
              ghLink="https://github.com/Phnumbahwan/reactjs-laravel-pos-ui"
              demoLink="https://buy-life.marysbridal.shop/dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
