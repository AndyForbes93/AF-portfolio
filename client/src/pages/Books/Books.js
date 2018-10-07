import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";


class Books extends Component {
  state = {
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="display-4">About Me</h1>
            </Jumbotron>
          </Col>
          </Row>
          <Row>
          <Col size="md-4">
             <img className="ml-5 mr-5 responsive" src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/36063938_10209602770024392_8502132841855844352_n.jpg?_nc_cat=101&oh=9ec59022157f8f40d43eb92e743023ef&oe=5C52C574" alt="andrew forbes at bootcamp graduation" width="75%" />
          </Col>
          <Col size="md-6">
          <div className="responsive">
            <h1>My name is Andy Forbes</h1>
            <p>I was born in Gainesvilles Florida in 1993, and grew up in the Tampa Bay Area. My biggest passions in life are hockey, music, and now coding. I've always had a huge desire to learn about all sorts of new technology and getting a career as a programmer. I have four months of expirence being self taught through Udemy, and Khan Academy, and recently graduated from the UCF Full Stack Web Development Bootcamp. I am always eager to learn more about programming and picking up new tools in my coding arsenal. </p>
            <p> I am a very creative person. Its fun to inject a little of your personality into the programs you make. In my expierence so far I've found coding to be a great way to strech my more creative muscles and I hope that I can continue to grow and eventually build bigger and better things. I can't wait to see what else I'm going to design.</p>
            <p>One of my biggest strengths is my work ethic; I'm always building new projects with Javascript and React. I'm also constantly learning. It exciting see what possible with new and exciting technologies.  Currently learning C# in the meantime, look forward to what projects are coming out of it!</p>
            <p>Check out some of my <a href="/projects">Projects</a> or my Github and Linkedin down below!</p>
            <hr />
            </div>
            <a href="https://github.com/AndyForbes93" target="_blank" rel="noopener noreferrer"><img src="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png" alt="github circular logo" height="119px" /></a>
            <a href="https://www.linkedin.com/in/andrew-forbes-636554138/" target="_blank" rel="noopener noreferrer"><img src="data:image/png;base64,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" alt="linkedin logo" height="112px" /></a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
