import React from "react";

import {brands} from "../../utils/image"

export default function SkillCard(props) {
  return (
    <div className="skill-container centered flex-col hvr-grow">
      <section>
        <img
          src={props.image}
          // style={{width:"1426",height:"736"}}
          alt="card"
        />
      </section>
      <p>{props.title.toUpperCase()}</p>
      <p>
        {props.position}&nbsp;DEVELOPER &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp;
        {props.mode}
      </p>
      <div className="flex-r preview">
        <span>
          <a
            href={props.source}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOURCE
          </a>
        </span>
        <span>
          <a
            href={props.view}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
          >
            PREVIEW
          </a>
        </span>
      </div>
      <div className="icon-box flex-r">
        {
          props.tools.map(entry => {
            
            return (
              <img src={brands[entry]} alt="tools" />
            )
          })
        }
      </div>
    </div>
  );
}
