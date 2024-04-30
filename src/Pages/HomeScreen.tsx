import React from "react";
import "../CSS/HomeScreen.css";
import { NavB } from "../Components/NavBar";
import "../Components/Footer";
import Footer from "../Components/Footer";
import BasicImage from "../Image/BasicImage.jpg"
import DetailedImage from "../Image/DetailedImage.jpg"
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";


function HomeScreenCard({img, header, body, button_text, link}:{
    img: string,
    header: string,
    body: string,
    button_text: string,
    link: "/basic-test" | "/detailed-test"
}): JSX.Element {
    /**
     * Element that displays a title, text body, and a button that links to a test
     */

    const navigate = useNavigate();

    return (
        <div className="home-card-bg" style={{background: "url(" + img + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}> {/* no way to do this without inline styling */}
            <div className="home-card-contents">
                <h1>{header}</h1>
                <p className="home-card-body">{body}</p>
                <Button className="home-card-button" onClick={() => navigate(link)}>{button_text}</Button>
            </div>
        </div>
    )
}


export default function HomeScreen() {
  return (
    <div>
      <NavB/>
      <div className="Home-body">
          <HomeScreenCard
              img={BasicImage}
              header={"Basic Test"}
              body={"Concerned about the path of your career? Gaining insight into your career options is quick and " +
                  "simple with our basic career test. It provides individualized recommendations based on your " +
                  "interests and strengths by utilizing AI analysis. Easily learn about potential job choices and " +
                  "gain a better understanding of your future in the workforce. Our basic career exam is your first " +
                  "step to success and is ideal for anyone looking to explore new prospects or needs a little " +
                  "prodding in the right direction."}
              button_text={"Take the Basic Test"}
              link={"/basic-test"}
          />
          <HomeScreenCard
              img={DetailedImage}
              header={"Detailed test"}
              body={"Looking to dive deep into your career options? Our detailed career test offers an in-depth analysis " +
                  "goes beyond the surface by using AI analysis, providing you with comprehensive insights tailored to " +
                  "your unique strengths, interests, and aspirations. Discover potential career paths you may not have " +
                  "considered and gain valuable clarity on your professional journey. Whether you're exploring new " +
                  "opportunities or seeking guidance on your current path, our detailed career test is your roadmap to " +
                  "success."}
              button_text={"Take the Detailed Test"}
              link={"/detailed-test"}
          />
      </div>
      <Footer/>
    </div>
  );
}