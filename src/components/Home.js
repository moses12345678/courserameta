import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import  './Style.css'; //Import the css file
import SpecialsComponent from "./SpecialsComponent";




export default function Home(){


    return(
        <>
          <Header />
           <SpecialsComponent />
          <Footer />
        </>
    )
}