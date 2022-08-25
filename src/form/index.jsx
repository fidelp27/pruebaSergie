import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Field from './field';
import './form.css';

const Form = () => {
  const [input, setInput] = useState({
    Name: '',
    LastName: '',
    NickName: '',
  });

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const validation = (obj) => {
    return Object.values(obj).some((item) => !item);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${input.Name} LastName: ${input.LastName} NickName: ${input.NickName}
    `);
    setInput({
      Name: '',
      LastName: '',
      NickName: '',
    });
  };
  return (
    <div className="form-container">
      <form onSubmit={onHandleSubmit}>
        {Object.entries(input).map(([key, value], index) => (
          <Field
            key={index}
            name={key}
            value={value}
            handleChange={onHandleChange}
          />
        ))}
        <button className="btn btn-primary" disabled={validation(input)}>
          Enviar
        </button>
      </form>
      <Link to="/" className="inicio">
        Volver a inicio
      </Link>
    </div>
  );
};
export { Form };
