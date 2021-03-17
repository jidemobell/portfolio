import React, { useState, useEffect } from "react"

import Home from "./components/Home/Home"
import Portfolio from './components/Portfolio/Portfolio'

import twitter from './images/twitter.png'
import github from './images/github.png'
import jsonData from "./data/data.json"

function App() {
  const [data, setData] = useState(jsonData);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // async function getData() {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.error("fetch error", error);
  //   }
  // }

  /* eslint-disable */
  // useEffect(() => {
  //   getData();
  // }, []);
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
      <footer className="footer flex-col centered">
         <div>
					 <a href="https://twitter.com/mobell3" target="_blank" rel="noopener noreferrer">
					   <img src={twitter}  alt='twitter' />
					 </a>
					 <a href="https://github.com/jidemobell" target="_blank" rel="noopener noreferrer">
					   <img src={github} alt='github'  />
					 </a>		 
				 </div>
			</footer>
    </div>
  )
}

export default App;
