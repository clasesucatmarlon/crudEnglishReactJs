import React, {useState} from "react";

import "./formAddVerbs.css";

function FormAddVerbs( { data, setData } ) {

const [newWord, setNewWord] = useState({})

const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    const formData = new FormData(event.target);

    const newWord = {}

    console.log(event.target)
    console.log('data: ', data)

    /* const verbs = JSON.parse(data) || []; */

  /*   let verb = []
    for (const [key, value] of formData.entries()) {
        verb[key] = value;
    } */

    //setNewWord(verb);
    //console.log('formulario: ', verb);
    //console.log('elemento nuevo: ', newWord);

    /* contact.id = uuid(); */

    // verb.push(verb);
    //setData(verb);

    /* localStorage.setItem("contacts", JSON.stringify(contacts)); */

    event.target.reset();

};

return (
<form method="POST" className="form-verbs rounded p-5" onSubmit={ handleSubmit }>
    <div className="mb-3">
        <label htmlFor="engWord" className="form-label">Word:</label>
        <input type="text" name="engWord" className="form-control" id="engWord" />
    </div>

    <div className="mb-3">
        <label htmlFor="engWordListen" className="form-label">Pronunciation Word:</label>
        <input type="text" name="engWordListen" className="form-control" id="engWordListen" />
    </div>

    <div className="mb-3">
        <label htmlFor="engWordSimplePas" className="form-label">Simple Past:</label>
        <input type="text" name="engWordSimplePas" className="form-control" id="engWordSimplePas" />
    </div>

    <div className="mb-3">
        <label htmlFor="engWordSimplePasListen" className="form-label"> Pronunciation Simple Past:</label>
        <input type="text" name="engWordSimplePasListen" className="form-control" id="engWordSimplePasListen" />
    </div>

    <div className="mb-3">
        <label htmlFor="engWordParticiplePas" className="form-label"> Participle Past:</label>
        <input type="text" name="engWordParticiplePas" className="form-control" id="engWordParticiplePas" />
    </div>

    <div className="mb-3">
        <label htmlFor="engWordParticiplePasListen" className="form-label"> Pronunciation Participle Past:</label>
        <input type="text" name="engWordParticiplePasListen" className="form-control" id="engWordParticiplePasListen" />
    </div>

    <div className="mb-3">
        <label htmlFor="espWord" className="form-label"> Translation:</label>
        <input type="text" name="espWord" className="form-control" id="espWord" />
    </div>

    <div className="mb-3">
        <label htmlFor="category" className="form-label"> Category:</label>
        <input type="text" name="category" className="form-control" id="category" />
    </div>


    <button type="submit" value="submit" className="btn btn-primary mt-4">Agregar</button>
</form>
);
}

export default FormAddVerbs;