import React from 'react';
import './NarrowCta.css';
import CtaButton from '../CtaButton/CtaButton';
import { Link } from 'react-router-dom';

var buttonStyle = {
  width: '240px',
  height: '60px',
  left: 'calc(50% - 240px/2 - 1px)',
  top: '256px',
  borderRadius: '5px',
  borderColor: '#000',
  fontSize: '18px',
  fontSamily: 'roboto',
  backgroundColor: '#F2F2F2',
};

export default function NarrowCta() {
  return (
    <div className="NarrowCtaStyle">
      <div className="ctaContainer">
        <div className="content">
          <h4>Want to help?</h4>
          <div>Donate now or contact us</div>
        </div>

        <div className="buttons">
          <Link to="/">
            <CtaButton />
          </Link>
          <Link to="/" style={buttonStyle}>
            Contact Us
          </Link>
          {/* <button style={buttonStyle}>Contact Us</button> */}
        </div>
      </div>
    </div>
  );
}
