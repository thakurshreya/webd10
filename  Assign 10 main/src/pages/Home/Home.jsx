import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

const Home = ({ setUser }) => {
  return (
    <div className="container">
      <Navbar setUser={setUser}/>
      <Card
        header={"Welcome to LinkedIn"}
        cardContent={
          "At LinkedIn, we transform aspirations into career milestones. Our platform is designed to connect top-tier talent with forward-thinking companies. As a premier destination for career development, we offer an extensive range of job opportunities across diverse sectors, enabling professionals to thrive in an ever-changing job landscape. Step into a world of possibilities, and let us guide you to your next career breakthrough in the digital era."
        }
        
      />
    </div>
  );
};

export default Home;
