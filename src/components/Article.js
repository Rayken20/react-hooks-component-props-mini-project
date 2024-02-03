import React from 'react';

const Article = ({ title, date = 'January 1, 1970', preview, minutes }) => {
  const renderReadingTime = (time) => {
    const coffeeCups = Math.ceil(time / 5);
    const bentoBoxes = Math.ceil(time / 10);

    if (time < 30) {
      return `☕️`.repeat(coffeeCups) + ` ${time} min read`;
    } else {
      return `🍱`.repeat(bentoBoxes) + ` ${time} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>Date: {date}</small>
      <p>{preview}</p>
      <p>{renderReadingTime(minutes)}</p>
    </article>
  );
};

export default Article;
