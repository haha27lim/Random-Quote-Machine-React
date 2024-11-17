import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './QuoteBox.css';

const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
  { text: "Life is what happens while you're busy making other plans.", author: "John Lennon" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
  { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
  { text: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
  { text: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone" }
];

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const updateQuote = () => {
    const { text, author } = getRandomQuote();
    setQuote(text);
    setAuthor(author);
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="container">
      <div id="quote-box">
        <div className="quote-content">
          <p id="text">"{quote}</p>
          <p id="author">-{author}</p>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
          >
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <button id="new-quote" onClick={updateQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;