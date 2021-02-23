import React, { useState, useEffect } from "react";
import FormAddVerbs from "../FormAddVerbs/FormAddVerbs";
import TableVerbs from "../Verbs/TableVerbs";
import axios from 'axios';
import './body.css';

const baseUrl = 'https://api-english-verb-reg.herokuapp.com/verb';

function Body() {
    const [data, setData] = useState([]);

    const peticionGet = async () => {
        await axios.get(baseUrl).then((response) => {
            setData(response.data.verbs);
        });
    };

    useEffect(async () => {
        await peticionGet();
    }, []);


    return (
        <div className="container p-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-5 pb-5">
                    <FormAddVerbs setData={setData} data={ data }/>
                </div>
                <div className="col-12 col-lg-12">
                    <h1 className="mb-5">list of verbs</h1>
                    <TableVerbs data={data} />
                </div>
            </div>
        </div>
    );
}

export default Body;
