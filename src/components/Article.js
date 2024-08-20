import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutesToRead = 0 }) => {
  const getReadingTimeEmoji = (minutes) => {
    const roundedMinutes = Math.ceil(minutes / (minutes < 30 ? 5 : 10)) * (minutes < 30 ? 5 : 10);
    if (minutes < 30) {
      return "☕️".repeat(roundedMinutes / 5) + ` ${roundedMinutes} min read`;
    } else {
      return "🍱".repeat(roundedMinutes / 10) + ` ${roundedMinutes} min read`;
    }
  };

  return (
    <article data-testid="article">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getReadingTimeEmoji(minutesToRead)}</p>
    </article>
  );
};

export default Article;
