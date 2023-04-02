import React from 'react';
import './Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShareNodes} from "@fortawesome/free-solid-svg-icons"; 

function Logo() {
    return (
        <div className="logo-container">
          <FontAwesomeIcon icon={faShareNodes} />
        </div>
      );
}
export default Logo;