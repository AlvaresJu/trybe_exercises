import React from 'react';
import PropTypes from 'prop-types';
import './validEmail_style.css';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {
        email && <h3 className={verifyEmail(email) ? 'valid-green' : 'invalid-red'} >{verifyEmail(email) ? 'Email Válido' : 'Email Inválido'}</h3>
      }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
