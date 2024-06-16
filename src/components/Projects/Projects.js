import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pass from "../../Assets/Projects/PG.png";
import razor from "../../Assets/Projects/RPC.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pass}
              isBlog={false}
              title="Random Password Generator"
              description="A web app for a random password generator built using HTML, CSS, and JavaScript allows users to create secure passwords with ease. The HTML structure provides the basic framework and input fields for the app. CSS enhances the visual appeal and user experience with a clean and intuitive design. JavaScript handles the core functionality, generating random passwords based on user-specified criteria like length and character types. This combination ensures the app is both aesthetically pleasing and functionally robust, helping users safeguard their online accounts."
              ghLink="https://github.com/akshittsharma/Random-Password-Generator"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={razor}
              isBlog={false}
              title="Razorpay Clone"
              description="Creating a Razorpay clone using HTML and CSS involves building a responsive and user-friendly web application that mimics the payment gateway's interface. The project begins with structuring the HTML to create the various sections such as the payment form, transaction history, and user dashboard. CSS is used to style these elements, ensuring a sleek, modern design that aligns with Razorpay's branding. Key features include an intuitive navigation bar, attractive buttons, and form inputs that enhance user experience. Additionally, media queries and flexbox are utilized to maintain the layout's responsiveness across different devices."
              ghLink="https://github.com/akshittsharma/RazorPay-Clone"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            /> */}
          {/* </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
