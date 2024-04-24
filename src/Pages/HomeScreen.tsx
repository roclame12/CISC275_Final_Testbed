import React from "react";
import { Link } from "react-router-dom";
import "../CSS/HomeScreen.css";
import { NavB } from "../Components/navBar";
import "../Components/Footer";
import Footer from "../Components/Footer";
import BasicTest from "../Components/BasicTestCard";
import DetailedTest from "../Components/DetailedTestCard";


function TestBlurb({header, textBody, linkText, link}: {header: string; textBody: string; linkText: string; link: string;}): JSX.Element {
    /**
     * JSX element that displays the title of a test, a paragraph describing the test, and a link to the test.
     *@author Stephen Sayers
     *
     * @param header {string} - used to display the name of the test
     * @param textBody {string} - used to describe what the test is about
     * @param linkText {string} - The text of the link that brings the user to the test
     * @param link {string} - The link that brings the user to the test
     */
    return (
        <div className="Text-blurb">
            <h2>{header}</h2>
            <p>{textBody}</p>
            <Link to={link}>{linkText}</Link>
        </div>
    )
}


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