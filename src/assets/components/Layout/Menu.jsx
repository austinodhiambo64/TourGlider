import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
//import "./styles.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container fluid>
      <Row>
        <Col className={`sidebar ${isOpen ? "open" : ""}`}>
          <Button className="burger" onClick={toggleMenu}>
            {isOpen ? (
              <img src="/vite.svg" alt="Close" />
            ) : (
              <img src="/menu.svg" alt="Menu" />
            )}
          </Button>
        </Col>
        <Col className={`menu ${isOpen ? "open" : ""}`}>
          <nav>
            <a style={{ animationDelay: "0.2s" }}>About</a>
            <a style={{ animationDelay: "0.3s" }}>Portfolio</a>
            <a style={{ animationDelay: "0.4s" }}>Services</a>
            <a style={{ animationDelay: "0.5s" }}>Contact</a>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
