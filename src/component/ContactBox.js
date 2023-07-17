import React from 'react';
import ContactImg from '../images/contact_img.png';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyleContact = styled.div`
  .contact-name {
    font-size: 18px;
  }
  img {
    width: 50px;
  }
  margin-bottom: 10px;
`;

const ContactBox = ({ item }) => {
  return (
    <StyleContact>
      <Row>
        <Col lg={1}>
          <img src={ContactImg} />
        </Col>
        <Col lg={11}>
          <div className="contact-name">{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </StyleContact>
  );
};

export default ContactBox;
