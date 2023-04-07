import './PageTwo.css';
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import FooterNavigation from "../FooterNavigation/FooterNavigation";
import HeaderTwo from "../HeaderTwo/HeaderTwo";
import axios from "axios";
import { React,useEffect,useState } from "react";


export default function PageTwo(){

    return(
        <div>
<HeaderNavigation/>
       
        <HeaderTwo/>

<FooterNavigation/>
        </div>
    )
}