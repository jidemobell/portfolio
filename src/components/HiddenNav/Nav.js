import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';





export default function Nav(props){
    return (
    <div className="nav-box centered" style={{ opacity: `${props.sideNavOpacity}` }}>
        <section className="flex-col nav-box-container">
            <div className="icon centered first-icon col-items"
             data-nav-item="home"
             onClick={props.passOpacity}
            >
              <FontAwesomeIcon icon="home" />
            </div>
            <div className="icon centered col-items"
            >
                <FontAwesomeIcon icon="suitcase" />
            </div>
        </section>
      </div>
    )
}