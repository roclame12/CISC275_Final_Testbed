import React from "react";
import "../CSS/HomeScreen.css";
import { NavB } from "../Components/navBar";
import "../Components/Footer";
import Footer from "../Components/Footer";
import BasicTest from "../Components/BasicTestCard";
import DetailedTest from "../Components/DetailedTestCard";




export default function HomeScreen() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  return (
    <div>
      <NavB/>
      <div className="test-container">
                <div className="test">
                    <BasicTest />
                </div>
                <div className="test">
                    <DetailedTest />
                </div>
            </div>
      <Footer/>
    </div>
  );
}