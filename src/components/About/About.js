import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./About.css";
import ProfilImage from "./profilImage.jpg";/*You can change name image logo.Remember change img src tag.*/

function About() {
    return (
        <div className="about">
           <Container>
            <Row>
                <Col sm={"6"} className="tc">
                    {/**Change logo image */}
                    <Image src={ProfilImage} roundedCircle fluid className="imgLogo"/>
                </Col>
                <Col sm={"6"} className="tc">
                    <div className="ma3 animate__animated animate__fadeInRight animate__delay-2s">
                        <div className="mb3 titleAbout tc">
                            <h1>
                                About me
                            </h1>
                        </div>

                        <div className="tc">
                            <p className="f3">
                                {/**Write how are you*/}
                                This is where you can describe about yourself. 
                                The more you describe about yourself, the more chances you have!
                                Extra Information about you! like hobbies and your goals.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> 
        </div>
        
    );
}

export default About