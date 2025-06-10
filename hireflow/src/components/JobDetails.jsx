// src/JobDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import JobData from "./JobData";
import { Container, Card, Button } from "react-bootstrap";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JobData.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <Card className="p-4 w-100" style={{ maxWidth: "500px" }}>
          <h4>Job not found</h4>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <Card className="w-100 p-4 shadow" style={{ maxWidth: "600px" }}>
        <Button
          variant="outline-secondary"
          onClick={() => navigate(-1)}
          className="mb-3"
        >
          ⬅ Back
        </Button>

        <h3>{job.title}</h3>
        <h6 className="text-muted">
          {job.company} — {job.location}
        </h6>
        <hr />
        <p>
          <strong>Description:</strong>
          <br />
          {job.description}
        </p>
        <p>
          <strong>Category:</strong> {job.category}
        </p>
        <p>
          <strong>Posted On:</strong> {job.postedDate}
        </p>

        {/* Apply Button - functionality can be added later */}
        <div className="text-center mt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => alert("Apply functionality coming soon!")}
          >
            Apply Now
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default JobDetails;
