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
            title="Spot-it"
            description="Spot-it is a Full-Stack app that uses React, Node.js, Express, MongoDB, and the Spotify web api to connect to spotify and make calls to the api to get user playlist data and search spotify for artists, albums, and tracks. It also allows user to submit reviews of their favorite albums that display with the tracks of the album. This app was built in 8 days by myself as part of the UCF Full-Stack Development Bootcamp"
            link="https://spot-it-app.herokuapp.com/"
          />
          <Card 
            title="Schedulizer"
            description="A full-stack web application built using Node.js, Express, MySQL, and Handlebars. This application is designed to help business owners create and schedule their employee's shifts and to give workers a simple way check their schedule. Schedulizer is an app that will make creating an entire buisness's staff schedule a breeze. It can help with organization of employee records as well as displaying a intuitive and easy-to-read schedule. This app was built with a group of four in 7 days as part f the UCF Full-Stack Web Development Bootcamp"
            link="https://ancient-earth-43897.herokuapp.com/"
          />
           <Card 
            title="Dinner Thyme"
            description="A simple web app that is built with Javascript, Materialize, and Food2Fork, and Nutrionix API's. This app allows users to search recipes based on what ingredients they have available and then displays the nutrional information of those ingredients alongside the recipe. This app was built in 7 days with a team of four as part of the UCF Full-Stack Web Developemnt Bootcamp"
            link="https://andyforbes93.github.io/Dinner_thyme_clean/"
          />
           <Card 
            title="Clicky Game"
            description="A simple web game that is built with React. The goal is to click each of the characters on screen without clicking one twice, but the charcacters are shuffled everytime its clicked. This was built in 3 days as part of UCF Full-Stack Web Development Bootcamp"
            link="https://aqueous-brushlands-43659.herokuapp.com/"
          />
           <Card 
            title="Friend Finder"
            description="A Full-Stack Web App built using HTML, Javascript, JQuery, Node.js, Bootstrap , and Express. This App asks the user to take a short ten question quiz, and then matches them to someone who has a similar score and gives them thier name and email"
            link="https://af-friend-finder.herokuapp.com/"
          />
           <Card 
            title="Hockey News Scraper"
            description="A Full-Stack Web App built using Handlebars, Node.js, Express, Cheerio, and MongoDB. This app will scrape thehockeynews.com and enter them into a Databse using mongoose, a user can then rate the articles and comment on them displaying them on another page along side what the user said."
            link="https://hockey-news-scraper.herokuapp.com/"
          />
          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;