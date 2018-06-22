import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";


class Projects extends Component {
 
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="display-4">My Projects</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
          </Col>
          <Col size="md-6">
          <Card 
            image="test"
            title="test"
            description="tst"
            link="/"
          />
          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;