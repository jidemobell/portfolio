import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SkillCard from "../Card/Card";
import Header from "../Header/Header";
// const SkillCard = React.lazy(() => import("../Card/Card"));

export default function Portfolio(props) {
  const passedArray = props.data !== undefined ? props.data : [];

  return (
    <div className="portfolio-box flex-col">
      <Header passCloseAction={props.closePortfolio} />
      <div className="portfolio-page" data-aos="fade-right">
        <div className="shelf">
          {passedArray.map((item) => {
            return (
              // <div>
              //   <Suspense fallback={<div>...Loading</div>}>
                  <SkillCard
                    image={item.imagelink !== undefined ? item.imagelink : ""}
                    title={item.name !== undefined ? item.name : ""}
                    source={item.github !== undefined ? item.github : ""}
                    view={
                      item.externallink !== undefined ? item.externallink : ""
                    }
                    position={item.position !== undefined ? item.position : ""}
                    mode={item.mode !== undefined ? item.mode : ""}
                    key={`key-${item.id}`}
                    tools={item.technologies !== undefined ? item.technologies : []}
                  />
              //   {/* </Suspense>
              // </div> */}
            );
          })}
        </div>
      </div>
    </div>
  );
}
