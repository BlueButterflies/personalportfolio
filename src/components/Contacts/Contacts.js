import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "./Contacts.css";


const styleIconBtn = { fontSize: '40px' };/**You can change font size icon */

const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

                        {/**Set with your service id, template id, and public key from your account emailjs*/}
        emailjs.sendForm('your service_id', 'your template_id', form.current, 'your public_id')
            .then((result) => {
                console.log(result.text);
                alert("Sent successfully");
            }, (error) => {
                console.log(error.text);
            }
        );

    };

    return (
        <div className="contacts">
            <Container fluid className="tc container">
                <h1 className=" white f1 tc">Contact me</h1>
                <Form ref={form} className="form tc" onSubmit={sendEmail}>
                    <Form.Group className="mb-2" controlId="formGroupName">
                        <Form.Control required type="text" name="user_name" placeholder="Full name" size="lg" id="fullName" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Control required type="email" name="user_email" placeholder="Email" size="lg" id="email" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Control required as={"textarea"} rows={8} name="message" placeholder="Message" id="massage" />
                    </Form.Group>
                    <Form.Group className="mb-3 tc" >
                        <Button type="submit" value="Send" variant="outline-light" style={{ width: "120px" }}>
                            <FaPaperPlane style={styleIconBtn} />
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>


    );
}

export default Contacts