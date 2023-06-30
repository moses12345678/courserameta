import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import LandingSection from "./LandingSection";
import  './Style.css'; //Import the css file



export default function Home(){


    return(
        <>
          <Header />
            <LandingSection />
          <Footer />
        </>
    )
}