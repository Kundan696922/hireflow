import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import JobData from "./JobData"; // static data

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let jobs = [...JobData];

    // Search filter
    if (searchTerm) {
      jobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (filterCategory) {
      jobs = jobs.filter((job) => job.category === filterCategory);
    }

    // Sorting
    if (sortOption === "newest") {
      jobs.reverse(); // simulate newest
    } else if (sortOption === "alphabetical") {
      jobs.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredJobs(jobs);
  }, [searchTerm, filterCategory, sortOption]);

  return (
    <div style={{ marginTop: "100px", padding: "20px" }}>
      <Container>
        {/* Search + Filter + Sort Controls */}
        <Row className="mb-4 align-items-center">
          <Col xs={12} md={5} className="mb-2 mb-md-0">
            <Form.Control
              type="text"
              placeholder="Search for jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col xs={6} md={3}>
            <Form.Select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">Filter by category</option>
              <option value="tech">Technology</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
            </Form.Select>
          </Col>
          <Col xs={6} md={2}>
            <Form.Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="newest">Newest</option>
              <option value="alphabetical">A-Z</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={2}>
            <Button
              variant="secondary"
              className="w-100 mt-2 mt-md-0"
              onClick={() => {
                setSearchTerm("");
                setFilterCategory("");
                setSortOption("");
              }}
            >
              Reset
            </Button>
          </Col>
        </Row>

        {/* Job Cards */}
        <Row>
          {filteredJobs.length === 0 ? (
            <Col>
              <p>No jobs found.</p>
            </Col>
          ) : (
            filteredJobs.map((job) => (
              <Col key={job.id} xs={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {job.company} &bull; {job.location}
                    </Card.Subtitle>
                    <Card.Text>{job.description}</Card.Text>
                    <Button
                      variant="primary"
                      className="mt-auto w-100"
                      onClick={() => navigate(`/job/${job.id}`)}
                    >
                      View Job
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
