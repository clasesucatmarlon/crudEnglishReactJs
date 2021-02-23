import React from "react";

const WordTable = ({ words }) => {
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
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        words.length > 0 ? (
                            words.map((word, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{word.engWord}</td>
                                    <td>{word.engWordListen}</td>
                                    <td>{word.engWordSimplePas}</td>
                                    <td>{word.engWordSimplePasListen}</td>
                                    <td>{word.engWordParticiplePas}</td>
                                    <td>{word.engWordParticiplePasListen}</td>
                                    <td>{word.espWord}</td>
                                    <td>{word.category}</td>
                                    <button className="button muted-button">Edit</button>
                                    <button className="button muted-button">Delete</button>
                                </tr>
                            ))
                        ) : (
                                <tr>
                                    <td colSpan={10}>No words</td>
                                </tr>
                            )



                    }



                </tbody>
            </table>
        </div>
    );
};

export default WordTable;
