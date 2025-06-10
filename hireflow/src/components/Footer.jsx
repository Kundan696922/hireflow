// src/components/Footer.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-5 pt-5 pb-4">
      <Container>
        <Row>
          {/* Useful Links */}
          <Col md={4} className="mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/home" className="text-white text-decoration-none">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Legal */}
          <Col md={4} className="mb-4">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms of Use
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Icons */}
          <Col md={4} className="mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">
          © {currentYear} HireFlow. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
