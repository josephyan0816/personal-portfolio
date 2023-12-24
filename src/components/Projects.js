import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Operations Management System(Java)",
      tech:'React + SpringBoot + MyBatis + MySQL+Redis',
      description: "This is an internal management system aimed at product managers and user operations. It is responsible for continuous iterations of related functionalities.",
      imgUrl: projImg1,
    },
    {
      title: "Game Library Business Decoupling(Golang)",
      tech:'Golang+Mysql+GRPC+Redis',
      description: "Initially, the company adopted a monolithic development approach to quickly launch the app, resulting in tightly coupled code, making it difficult to expand the system. To address this, the game library business was decoupled from the monolithic application and transformed into a standalone internal service, accessible through RPC calls.",
      imgUrl: projImg2,
    },
    {
      title: "Link Preview(Python+Golang)",
      tech:'Golang+Scrapy+MySQL+Redis+GRPC+RocketMQ',
      description: "The original link preview feature was integrated into the initial codebase. The goal is to extract this functionality as a foundational service.\n" +
          "- Implemented the ability to add games by utilizing web scraping to fetch and parse game data, creating games in the system.\n" +
          "- Completed link preview functionality for chat messages by asynchronously consuming data using RocketMQ.",
      imgUrl: projImg3,
    },
    {
      title: "GoodTalk Notes(Golang)",
      tech: 'Golang+MongoDB+Redis+MySQL\n',
      description: "GoodTalk Notes is designed to provide users with game-related strategy notes, allowing users to edit and view them.\n" +
          "- Stored note-related information in MongoDB, enabling CRUD (Create, Read, Update, Delete) operations for notes.",
      imgUrl: projImg1,
    },
    {
      title: "Development of Backend API for FSEC(Java)",
      tech: 'React + SpringBoot + MyBatis + MySQL + Redis\n',
      description: "Completed the development of web backend APIs for the internal risk management platform to expedite the rollout of risk models and policy rules. These APIs are made available to the strategy team for their use.",
      imgUrl: projImg2,
    },
    {
      title: " Refactoring of Tagging System",
      tech: 'Golang+GRPC+Redis+MySQL\n',
      description: "Users in the Futu  APP need to invoke the risk control system's APIs to tag users when posting comments. The existing tagging system was unable to meet the new business requirements and lacked proper monitoring. To address this, we refactored the business security tagging system to meet the needs of the new business. The project utilized a side-cache architecture, with Redis caching hot data and implemented measures to prevent cache penetration. Full data was stored in MySQL for related CRUD operations.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br/>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/*<Tab.Pane eventKey="section">*/}
                    {/*  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>*/}
                    {/*</Tab.Pane>*/}
                    {/*<Tab.Pane eventKey="third">*/}
                    {/*  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>*/}
                    {/*</Tab.Pane>*/}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
