import React from 'react';

// Creación de campos antes del map

const Field = ({ name, handleChange, value }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input name={name} type="text" onChange={handleChange} value={value} />
    </>
  );
};
export default Field;
