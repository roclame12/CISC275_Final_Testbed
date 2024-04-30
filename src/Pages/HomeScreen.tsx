import React from "react";
import "../CSS/HomeScreen.css";
import { NavB } from "../Components/NavBar";
import "../Components/Footer";
import Footer from "../Components/Footer";
import BasicTest from "../Components/BasicTestCard";
import DetailedTest from "../Components/DetailedTestCard";


function HomeScreenCard({img, header, body, button_text, link}:{
    img: string,
    header: string,
    body: string,
    button_text: string,
    link: "/basic-test" | "/detailed-test"
}): JSX.Element {

    return (
        <div className={"home-card"} style={{backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            <p>text</p>
        </div>
    )
}



export default function HomeScreen() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  return (
    <div>
      <NavB/>
      <div className="Home-body">
                <div className="test">
                    <HomeScreenCard img={"../Image/BasicImage.jpg"} header={"h"} body={"h"} button_text={"h"} link={"/basic-test"}/>
                </div>
                <div className="test">
                    <DetailedTest />
                </div>
            </div>
      <Footer/>
    </div>
  );
}