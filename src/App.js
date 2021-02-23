import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Body from './components/Body/Body';




/* const baseUrl = 'https://api-english-verb-reg.herokuapp.com/verb'; */



function App() {

/*    const [data, setData] = useState([]);

   const peticionGet = async () => {
      await axios.get(baseUrl)
         .then(response => {
            setData(response.data.verbs)
         });
   }

   useEffect(async () => {
      await peticionGet();
   }, []) */


   return (
      <div className="App">
         <Header />
         <h1 className="mt-4 mb-4">V E R B S</h1>
         <Body />
         

      </div>
   );
}

export default App;
