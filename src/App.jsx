import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import User from "./components/User/User";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/:userId" element={<User />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
