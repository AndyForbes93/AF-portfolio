import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Contact extends Component {
    state = {
      name: "",
      email: "",
      comment: ""
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.name && this.state.email) {
        API.saveBook({
          name: this.state.name,
          email: this.state.email,
          comment: this.state.comment
        })
          .catch(err => console.log(err));
      }
      this.props.history.push('/');
    };

    resetForm = () => { 
        document.getElementById("contactForm").reset();
      }
  
    render() {
      return (
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="display-4">Contact Me</h1>
              <p className="lead">Send me a message or some feedback and I'll get back to you right away!</p>
            </Jumbotron>
          </Col>
          <Col size="md-3">
          </Col>
          <Col size="md-6">
          <form id="contactForm" onSubmit={this.resetForm}>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Name"
                />
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email"
                />
                <TextArea
                  value={this.state.comment}
                  onChange={this.handleInputChange}
                  name="comment"
                  placeholder="Comment"
                />
                <FormBtn
                  disabled={!(this.state.name && this.state.email)}
                  onClick={this.handleFormSubmit}
                >
                  Submit 
                </FormBtn>
              </form>

          </Col>
        </Row>
      </Container>
      );
    }
  }
  
  export default Contact;