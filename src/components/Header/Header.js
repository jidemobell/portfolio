import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import mobell from '../../images/edited.png'

export default function Header() {
  return (
    <>
      <div className="header flex-row">
				<div 
					id="brand"
					onClick={() => {
						
					}}
				>
          <FontAwesomeIcon icon="terminal" id="terminal" />
        </div>
        <nav>
          <div>
							<img src={mobell} alt="avatar" id="avatar" />
          </div>
        </nav>
      </div>
    </>
  );
}
