import React, { useState, useEffect } from "react"

import Home from "./components/Home/Home"
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  const url = `https://my-json-server.typicode.com/jidemobell/jsonbank/project`;
  const [data, setData] = useState([]);
  const [showPortfolio, setShowPortfolio] = useState(false);

  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("fetch error", error);
    }
  }

  /* eslint-disable */
  useEffect(() => {
    getData();
  }, []);
  /* eslint-disable */

  return (
    <div>
      {
        showPortfolio ?
        (
          <Portfolio
          closePortfolio={() => setShowPortfolio(false)}
          data={data}
        />
        ) :
        (<Home data={data} openPortFolio={val => setShowPortfolio(val)} />)
      }
      
      
    </div>
  )
}

export default App;
