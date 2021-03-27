import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobell from "../../images/edited.png";


export default function Header({ passCloseAction }) {
  return (
    <>
      <div className="header flex-row sticky">
        <div id="brand" onClick={passCloseAction} className="hvr-grow">
          <FontAwesomeIcon icon="angle-double-left" id="terminal"  />
        </div>
        <nav>
					<div 
          className="hvr-sink"
					 >
            <img src={mobell} alt="avatar" id="avatar" />
          </div>
        </nav>
      </div>
    </>
  );
}
