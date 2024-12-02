import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import "./about.css";

const About = ({ setUser }) => {
  return (
    <div className="container">
      <Navbar setUser={setUser} />
      <Card
        header={"About LinkedIn"}
        cardContent={
          "LinkedIn is the world’s largest professional network, dedicated to empowering professionals to connect, grow, and succeed. With millions of members spanning every industry and region, LinkedIn serves as a powerful platform where individuals and businesses can build meaningful relationships, discover opportunities, and share insights. Our mission is to create economic opportunity for every member of the global workforce by fostering connections, providing resources, and facilitating learning. From job seekers and recruiters to thought leaders and innovators, LinkedIn is where careers are launched, ideas are shared, and professional communities thrive. Join us and be part of a network that shapes the future of work."
        }
      />
    </div>
  );
};

export default About;
