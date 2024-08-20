import React from 'react';

const About = ({ image, about }) => {
  return (
    <aside>
      <img
        src={image || "https://via.placeholder.com/215"}
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
};

export default About;
