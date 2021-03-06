import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contactus from '../../contactus.png';
import Image from 'react-bootstrap/Image';
import './ContactUs.scss';

export default function ContactUs() {
  return (
    <Row style={{ backgroundColor: '#F2F2F2' }} className="m-0 p-0">
      <Col className="m-0 p-4 ContactUsheight">
        <ContactForm />
      </Col>
      <Col lg={5} className="m-0 p-0 w-50 d-none d-md-block">
        <Image src={contactus} alt="" className="ContactUsheight w-100" />
      </Col>
    </Row>
  );
}
