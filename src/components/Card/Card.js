import React from "react";


export default function SkillCard(props) {
  return (
    <div className="skill-container centered flex-col hvr-grow">
      <section>
        <img  src={props.image} 
        // style={{width:"1426",height:"736"}} 
        alt="card" />
      </section>
      <p>{props.title.toUpperCase()}</p>
      <p>
        {props.position}&nbsp;DEVELOPER &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp;
        {props.mode}
      </p>
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
  );
}
