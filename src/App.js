import React, {useState, useEffect} from 'react';
import './App.css';

import Home from './components/Home/Home';



function App() {
  const url = `https://my-json-server.typicode.com/jidemobell/jsonbank/project`;
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch(url)
      const data = await response.json();
      setData(data);
      console.log(data)
    } catch (error) {
      console.error("fetch error", error);
    }
  }

  /* eslint-disable */
  useEffect(() => {
    getData()
  }, []);
  /* eslint-disable */

  return (
       <Home  data={data}/>
  )
}

export default App;
