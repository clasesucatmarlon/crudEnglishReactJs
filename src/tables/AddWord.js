import axios from "axios";
import React, { useEffect, useState } from "react";

const AddWord = ( {addWord} ) => {

    const initialFormState = {
        "id": null,
        "engWord": "",
        "engWordListen": "",
        "engWordSimplePas": "",
        "engWordSimplePasListen": "",
        "engWordParticiplePas": "",
        "engWordParticiplePasListen": "",
        "espWord": "",
        "category": ""
    }

    const [word2, setWord2] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setWord2({ ...word2, [name]: value })
        console.log(word2)
    }

    useEffect(() => {
        console.log("Loading...");
        

      }, []);
      const {engWord,engWordListen,engWordParticiplePas,engWordParticiplePasListen,engWordSimplePas,engWordSimplePasListen,espWord} = word2;

const fetchData = async (engWord,engWordListen,engWordParticiplePas,engWordParticiplePasListen,engWordSimplePas,engWordSimplePasListen,espWord) => {
          try {
            const { data } = await axios.post(
                // aqui la direccion de API
              "https://jsonplaceholder.typicode.com/posts",
              {

                // Cuerpo de los datos a enviar
                // Es decir 
                engWord,
                engWordListen,
                engWordParticiplePas,
                engWordParticiplePasListen,
                engWordSimplePas,
                engWordSimplePasListen,
                espWord

              }
            );
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };      


    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log('Submit');
        //  Debes validar los campos


        // Llamar a la funcion de axios que va enviar la informacion 
        const datos= await fetchData(engWord,engWordListen,engWordParticiplePas,engWordParticiplePasListen,engWordSimplePas,engWordSimplePasListen,espWord);
        //  Haci debe enviar los datos a tu API.
        addWord(word2)
        setWord2(initialFormState)

    }

return (
    <form
        method="POST"
        className="form-verbs rounded p-5 m-5"
        // onSubmit = { event => {
        //     event.preventDefault()
        //     if (!word2.engWord || !word2.engWordListen || !word2.engWordParticiplePas || !word2.engWordParticiplePasListen || !word2.engWordSimplePas || !word2.engWordSimplePasListen || !word2.espWord) return




        //     addWord(word2)
        //     setWord2(initialFormState)

        // }}
        onSubmit={handleSubmit}
    >
        <div className="mb-3">
            <label className="form-label">Word:</label>
            <input
                type="text"
                name="engWord"
                className="form-control"
                id="engWord"
                onChange={handleInputChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Pronunciation Word:</label>
            <input
                type="text"
                name="engWordListen"
                className="form-control"
                id="engWordListen"
                onChange={handleInputChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Simple Past:</label>
            <input
                type="text"
                name="engWordSimplePas"
                className="form-control"
                id="engWordSimplePas"
                onChange={handleInputChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label"> Pronunciation Simple Past:</label>
            <input
                type="text"
                name="engWordSimplePasListen"
                className="form-control"
                id="engWordSimplePasListen"
                onChange={handleInputChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label"> Participle Past:</label>
            <input
                type="text"
                name="engWordParticiplePas"
                className="form-control"
                id="engWordParticiplePas"
                onChange={handleInputChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label"> Pronunciation Participle Past:</label>
            <input
                type="text"
                name="engWordParticiplePasListen"
                className="form-control"
                id="engWordParticiplePasListen"
                onChange={handleInputChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label"> Translation:</label>
            <input
                type="text"
                name="espWord"
                className="form-control"
                id="espWord"
                onChange={handleInputChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label"> Category:</label>
            <input
                type="text"
                name="category"
                className="form-control"
                id="category" onChange={handleInputChange}
            />
        </div>


        <button type="submit" value="submit" className="btn btn-primary mt-4">Agregar</button>
    </form>
);
};

export default AddWord;
