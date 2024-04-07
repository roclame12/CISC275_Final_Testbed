import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/HomeScreen.css";


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}


function Header() {
  return (
    <header className="container">
      <div className="header">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </header>
  );
}


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
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputted
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div>
      <Header/>
      <div className="Home-body">
        <TestBlurb
            header={"Basic Test"}
            textBody={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                "labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id. Vestibulum morbi " +
                "blandit cursus risus at ultrices. Vel quam elementum pulvinar etiam non quam. Ut sem nulla pharetra " +
                "diam sit amet nisl suscipit. Nisi lacus sed viverra tellus in hac habitasse."}
            linkText={"Take the Basic Test"}
            link={"/basic-test"}
        />
        <p style={{paddingBottom: "1px"}}/> <p/>{/*adds some space for aesthetics*/}
        <TestBlurb
            header={"Detailed Test"}
            textBody={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                "labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id. Vestibulum morbi " +
                "blandit cursus risus at ultrices. Vel quam elementum pulvinar etiam non quam. Ut sem nulla pharetra " +
                "diam sit amet nisl suscipit. Nisi lacus sed viverra tellus in hac habitasse."}
            linkText={"Take the Detailed Test"}
            link={"/detailed-test"}
        />
      </div>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Insert API Key Here"
          onChange={changeKey}
        ></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}