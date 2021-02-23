import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

import WordTable from './tables/WordTable';
import AddWord from './tables/AddWord';



const baseUrl = 'https://api-english-verb-reg.herokuapp.com/verb';


function App() {


   /* const [data, setData] = useState([]); */

   const peticionGet = async () => {
      await axios.get(baseUrl).then((response) => {
         setWords(response.data.verbs);
      });
   };

   useEffect(async () => {
      await peticionGet();
   }, []);

   /*    const wordData = [
         {
            "id": 1,
            "engWord": "Wait",
            "engWordListen": "wait",
            "engWordSimplePas": "Waited",
            "engWordSimplePasListen": "waitid",
            "engWordParticiplePas": "Waited",
            "engWordParticiplePasListen": "waitid",
            "espWord": "Esperar",
            "category": "Regular",
         },
         {
            "id": 2,
            "engWord": "End",
            "engWordListen": "end",
            "engWordSimplePas": "Ended",
            "engWordSimplePasListen": "endid",
            "engWordParticiplePas": "Ended",
            "engWordParticiplePasListen": "endid",
            "espWord": "Terminar",
            "category": "Regular",
         }
      ] */

   const [words, setWords] = useState([])

   const addWord = (word) => {
      word.id = words.length + 1
      setWords([...words, word])
   }


   return (
      <div className="App">
         <Header />
         <h1 className="mt-4 mb-4">V E R B S</h1>
         <WordTable words={words} />
         <AddWord addWord={addWord} />



      </div>
   );
}

export default App;
