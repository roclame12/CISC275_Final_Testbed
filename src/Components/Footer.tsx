import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

let keyData = "";
const saveKeyName = "MYKEY";


export function find_key(): string|undefined {
    /**
     * function to be used in any page that needs the API key, searches localStorage for the key and returns the key if
     * it finds it, it returns undefined if the key isn't set. Heavily based off of the given code
     */
    const prevKey = localStorage.getItem(saveKeyName); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect

    if (prevKey !== null) {return JSON.parse(prevKey);}
    else {return "No key found";} // you need to have some string here or GPT's API throws errors
}


export default function Footer(): JSX.Element {
    const [key, setKey] = useState<string>(keyData); //for api key input

    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {setKey(event.target.value);}

    //sets the local storage item to the api key the user inputted
    function handleSubmit() {
        localStorage.setItem(saveKeyName, JSON.stringify(key));
        window.location.reload();//when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
    }

    return (
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
    )
}