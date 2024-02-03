import React from 'react';

const About = ({ imageUrl = 'https://via.placeholder.com/215', altText = 'blog logo', aboutText }) => {
  return (
    <aside>
      <img src={imageUrl} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;
