import React from "react";
import Container  from "react-bootstrap/Container";
import { FaGithub, FaLinkedinIn, FaCopyright, FaTwitter} from "react-icons/fa";
import "./Footer.css";

const styleIcon = { 
    fontSize: '40px', 
    color: 'rgb(255, 177, 177)',
};

const styleCopy = {
    fontSize: '25px',
    color: 'rgb(255, 177, 177)',
    margin: '0 1% 0 0'
}

const styleTop = {
    fontSize: '20px',
    color: 'rgb(255, 177, 177)',
    margin: '0 0 6% 0'
}

function Footer() {
    return (
        <div className="footer tc">
            <Container>
                {/** In each URL write the URL of your account*/}
                <a href="" target="_blank">
                  <FaGithub style={styleIcon} className="icon ma3"/>  
                </a>
                <a href="" target="_blank">
                   <FaLinkedinIn style={styleIcon} className="icon ma3"/> 
                </a>
                
                <a href="" target="_blank">
                   <FaTwitter style={styleIcon} className="icon ma3"/> 
                </a>
                <hr/>

                <h6 className="mt3">
                    <FaCopyright style={styleCopy} />
                    <a href="https://github.com/BlueButterflies">
                        {"2023 - Template developed by S/Z Siyana Zdravkova Developer"}
                    </a>
                </h6>
            </Container>
        </div>
    );

}

export default Footer