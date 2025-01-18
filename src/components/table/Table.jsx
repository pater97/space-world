// -- REACT
import React, { useState } from "react";
// -- STYLE
import "./table.scss";

const Table = ({ data,search,onPlanetClick }) => {

  // Filtra i dati in base al nome
  const filteredData = data.filter((person) =>
    person?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid-table-container">
      <table className="grid-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Planet</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{new Date(person.created).toLocaleDateString()}</td>
              <td>{new Date(person.edited).toLocaleDateString()}</td>
              <td>
                <button
                  className="planet-link"
                  onClick={() => onPlanetClick(person.homeworld)}
                >
                  View Planet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
