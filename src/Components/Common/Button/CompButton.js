import React from "react";
import Button from 'react-bootstrap/Button';
import "./CompButton.css"




export default function CompButton({name}){
    return(
        <button className="TestingButton"> {name} </button>
    )
}
