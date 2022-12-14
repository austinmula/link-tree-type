import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { mylinks } from "../data/mylinks";

function MainContent({ data }) {
  return (
    <main>
      <div className="profile-container">
        <img
          src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="profile-pic"
          id="profile_img"
        />
        <p id="twitter">Austin Mula</p>
        <p id="slack">Austin Mula</p>

        <div className="share-container">
          <img src="./images/shareicon.png" alt="shareicon" />
        </div>
      </div>
      <div className="link-container">
        {/* {data.map((item) => (
          <a href={item.link} key={item.id} id={item.id}>
            {item.text}
          </a>
        ))} */}
      </div>
      <div className="socials-container">
        <a href="https://slack.com/">
          <img src="./images/slack.png" alt="slack-socials" />
        </a>
        <a href="https://github.com/austinmula/">
          <img src="./images/github.png" alt="github-socials" />
        </a>
      </div>
    </main>
  );
}

export default MainContent;
