import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SkillCard from "../Card/Card";
import Header from "../Header/Header";

export default function Portfolio(props) {
  const passedArray = props.data !== undefined ? props.data : [];

  return (
    <>
		  <Header />
      <div className="portfolio-page">
        {/* <div className="portfolio-container flex-col"> */}
        {/* <div id="closer" className="flex-row" onClick={props.closePortfolio}>
        <FontAwesomeIcon icon="times-circle" />
      </div> */}
        <div className="shelf">
          {passedArray.map(item => {
            return (
              <SkillCard
                image={item.imagelink !== undefined ? item.imagelink : ""}
                title={item.name !== undefined ? item.name : ""}
                source={item.github !== undefined ? item.github : ""}
                view={item.externallink !== undefined ? item.externallink : ""}
                position={item.position !== undefined ? item.position : ""}
                mode={item.mode !== undefined ? item.mode : ""}
                key={`key-${item.id}`}
              />
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
