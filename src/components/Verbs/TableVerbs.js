import React from "react";

const TableVerbs = ({ data }) => {
  return (
      <div className="container-fluid mt-5  table-responsive">
        <table className="table table-secondary table-striped">
          <thead className="table-dark ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Word</th>
              <th scope="col">Pronunciation</th>
              <th scope="col">Simple Past</th>
              <th scope="col">Pronunciation</th>
              <th scope="col">Participle Past</th>
              <th scope="col">Pronunciation</th>
              <th scope="col">Translation</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((verb, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{verb.engWord}</td>
                <td>{verb.engWordListen}</td>
                <td>{verb.engWordSimplePas}</td>
                <td>{verb.engWordSimplePasListen}</td>
                <td>{verb.engWordParticiplePas}</td>
                <td>{verb.engWordParticiplePasListen}</td>
                <td>{verb.espWord}</td>
                <td>{verb.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default TableVerbs;
