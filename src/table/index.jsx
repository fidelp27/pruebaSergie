import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { data } from '../data';
import './table.css';

const TableData = () => {
  const columns = Object.keys(data[0]);
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {React.Children.toArray(
              columns.map((elem) => {
                return <th>{elem}</th>;
              })
            )}
          </tr>
        </thead>
        <tbody>
          {React.Children.toArray(
            data.map((elem) => {
              return (
                <tr>
                  <td>{elem.nombre}</td>
                  <td>{elem.edad}</td>
                  <td>{elem.carrera}</td>
                  <td>{elem.hobbie}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
      <Link to="/" className="inicio">
        Volver a inicio
      </Link>
    </>
  );
};
export { TableData };
