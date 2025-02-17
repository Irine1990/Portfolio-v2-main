import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:irine18@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:irine18@gmail.com">irine18@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918939343116"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918939343116">(+91) 8939343116</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}