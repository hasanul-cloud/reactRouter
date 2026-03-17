import React from "react";
import Slider from "../Slider";

function About() {
  return (
    <div className="flex max-md:flex-col justify-center items-center gap-10">
      <div className="">
        <Slider />
      </div>
      <div className="container text-gray-400 text-center">
        <p>
          <span className="font-bold">MERN </span>is a popular web development
          stack used to build modern full-stack web applications using
          JavaScript. MERN is made of four main technologies:
        </p>
        <ul className="text-blue-700 space-y-4">
          <li>
            1️⃣ <span className="font-bold text-blue-300">MongoDB</span> A NoSQL
            database used to store data. Data is stored in JSON-like documents.
          </li>
          <li>
            2️⃣ <span className="font-bold text-blue-300">Express.js</span> A
            backend framework that runs on Node.js. It helps create APIs and
            server logic easily.
          </li>
          <li>
            3️⃣ <span className="font-bold text-blue-300">React</span> A frontend
            JavaScript library used to build user interfaces (UI). It allows
            developers to create interactive and fast websites.
          </li>
          <li>
            4️⃣ <span className="font-bold text-blue-300">Node.js</span> A
            JavaScript runtime that runs JavaScript on the server. It allows
            developers to build backend applications using JavaScript.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
