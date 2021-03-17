import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import DomPortal from '../../portal/DomPortal'
// import Menu from '../Menu/Menu'

import mobell from "../../images/edited.png";

// const DropDown = DomPortal(Menu)

export default function Header({ passCloseAction }) {
  // const[showPortal, setShowPortal] = useState(false)

  // const showMenuPortal = () => setShowPortal(true);

  return (
    <>
      <div className="header flex-row">
        <div id="brand" onClick={passCloseAction} className="hvr-grow">
          <FontAwesomeIcon icon="angle-double-left" id="terminal"  />
        </div>
        <nav>
					<div 
          //  onClick={showMenuPortal}
          className="hvr-sink"
					 >
            <img src={mobell} alt="avatar" id="avatar" />
          </div>
        </nav>
      </div>
      {/* {
				showPortal ? 	<DropDown showHome={passCloseAction} /> : ''
			}
		 */}
    </>
  );
}
