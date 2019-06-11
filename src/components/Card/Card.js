import React from 'react';

// import job from '../../images/card/ginnyBradley.PNG'

export default function SkillCard(props){
    console.log("link", props)
    return (
        <div className="skill-container centered flex-col">
           <section>
               <img src={props.image} alt="card"/>
           </section>
           <p>{props.title.toUpperCase()}</p>
           <p>{props.position}&nbsp;DEVELOPER &nbsp;  &nbsp;  &nbsp;|  &nbsp;  &nbsp;{props.mode}</p>
           <span><a href={props.source} className="links">SOURCE</a></span>
           <span><a href={props.view} className="links">PREVIEW</a></span>  
        </div>
    )
}