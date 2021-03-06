import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './LangButton.scss';
export default function LangButton() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language || window.localStorage.i18nextLng || '';

  return (
    <Form className="mt-3">
      <Form.Group>
        <Form.Control
          as="select"
          size="sm"
          value={currentLang}
          onChange={() => changeLanguage(event.target.value)}
          style={{ width: `90px` }}
          className="langButton"
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
