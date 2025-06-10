import React, { useContext } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { JobContext } from "./JobContext";
import { useNavigate } from "react-router-dom";

function Company() {
  const { jobs } = useContext(JobContext);
  const navigate = useNavigate();

  // Group jobs by company and count jobs
  const companyMap = jobs.reduce((acc, job) => {
    acc[job.company] = acc[job.company] ? [...acc[job.company], job] : [job];
    return acc;
  }, {});

  const companyList = Object.entries(companyMap); // [ [companyName, [jobs]], ... ]

  return (
    <Container className="mt-5 pt-4 pt-md-5">
      <h2 className="text-center mb-4">Companies & Job Listings</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {companyList.map(([company, jobList]) => (
          <Col key={company}>
            <Card className="shadow h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{company}</Card.Title>
                <Card.Text>
                  Jobs posted: <strong>{jobList.length}</strong>
                </Card.Text>
                <ul className="ps-3">
                  {jobList.map((job) => (
                    <li key={job.id} className="mb-2">
                      <div className="d-flex flex-column">
                        <span>{job.title}</span>
                        <Button
                          variant="primary"
                          size="sm"
                          className="mt-1"
                          onClick={() => navigate(`/job/${job.id}`)}
                        >
                          View Job
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Company;
