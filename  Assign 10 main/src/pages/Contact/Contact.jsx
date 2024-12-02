import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

const Contact = ({ setUser }) => {
  return (
    <div className="container">
      <Navbar setUser={setUser} />
      <Card
        header={"Reach Out to LinkedIn"}
        cardContent="
        For further information or support
        contact us at:
        Email: support@Linkedin.com
        Phone: 111-111-1111
        "
      />
    </div>
  );
};

export default Contact;
