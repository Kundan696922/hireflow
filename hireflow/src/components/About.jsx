import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5 pt-5 ">
      <h2 className="text-center mb-4">About HireFlow</h2>

      <Row className="justify-content-center mb-5">
        <Col md={10} lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Text>
                <strong>HireFlow</strong> is your modern job search platform
                connecting top talent with leading companies. Our mission is to
                streamline the hiring process through intuitive design,
                responsive tools, and intelligent features.
              </Card.Text>
              <Card.Text>
                Whether you're a job seeker looking for the next big opportunity
                or a recruiter searching for skilled professionals, HireFlow is
                designed to support your journey every step of the way.
              </Card.Text>
              <Card.Text>
                We provide job listings across various domains including tech,
                marketing, finance, and more – all updated regularly with the
                latest openings.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="text-center mb-4">Key Features</h4>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <Card.Title>Smart Job Search</Card.Title>
              <Card.Text>
                Filter, sort, and search for jobs that best match your skills
                and location.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <Card.Title>Company Insights</Card.Title>
              <Card.Text>
                Learn about companies, their culture, and the roles they
                frequently post.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <Card.Title>Easy Job Posting</Card.Title>
              <Card.Text>
                Employers can quickly post openings and manage applications
                efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
