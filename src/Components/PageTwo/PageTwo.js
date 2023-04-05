import React from "react";
import './PageTwo.css';
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import FooterNavigation from "../FooterNavigation/FooterNavigation";
import HeaderTwo from "../HeaderTwo/HeaderTwo";


export default function PageTwo(){
    return(
        <div>
<HeaderNavigation/>

<HeaderTwo/>

<FooterNavigation/>
        </div>
    )
}