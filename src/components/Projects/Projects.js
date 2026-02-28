import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import buyLife from "../../Assets/Projects/buyLife.png";
import hoops from "../../Assets/Projects/hoops.png";
import gownRentalApp from "../../Assets/Projects/gownRentalApp.png";
import agro from "../../Assets/Projects/agro.png";
import wis from "../../Assets/Projects/wis.png";
import travel from "../../Assets/Projects/travel.png";

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
              imgPath={travel}
              isBlog={false}
              title="AI Travel Spot Generator"
              description="Travel Spot Generator is a web application that helps users discover the most remarkable spots worth visiting in any location. Simply enter a city, region, or address and the app will surface top travel destinations nearby, complete with an interactive map and spot details to plan your next adventure."
              ghLink="https://github.com/Phnumbahwan/travel-spot-generator"
              demoLink="https://travel-spot-generator.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agro}
              isBlog={false}
              title="Agro Power Plant"
              description="Agro Pro PowerPlant is a modern web-based application built with ReactJS and ExpressJS, designed to streamline inventory management and transaction monitoring for agricultural businesses. The system offers an intuitive interface for managing stock levels, tracking product movement, and generating insightful reports to support informed business decisions."
              demoLink="https://agropropowerplant.org/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wis}
              isBlog={false}
              title="Warehouse Inventory System"
              description="The Warehouse Inventory System is a custom-built web application developed for a government army unit to efficiently manage military supplies, equipment, and logistical inventory across multiple storage facilities. Built with ReactJS for the frontend and Node.js (ExpressJS) for the backend, the system enhances operational visibility, security, and control over sensitive inventory assets."
              demoLink="https://stg-warehouse.gpacturan.site/login"
            />
          </Col>

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
