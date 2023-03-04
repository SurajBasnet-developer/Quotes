import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  const handleNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  const quoteContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    background: "linear-gradient(90deg, #a3bded 30%, #539165 100%)",
  };

  const quoteStyle = {
    fontSize: "30px",
    textAlign: "bold",
    maxWidth: "80%",
    marginBottom: "2rem",
    color: "green",
    fontWeight: "bold",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease",
    border: "none",
    outline: "none",
    fontFamily: "Times New Roman",
  };

  const authorStyle = {
    fontSize: "2rem",
    fontStyle: "italic",

    color: "#3F497F",
    fontWeight: "underline",
  };

  const buttonStyle = {
    marginTop: "1rem",
    backgroundColor: "#3E54AC",
    color: "#6991c7",
    fontWeight: "bold",
    padding: "1rem 2rem",
    borderRadius: "50px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
    outline: "none",
  };

  return (
    <div style={quoteContainer}>
      <div style={quoteStyle}>{quote}</div>
      <div style={authorStyle}>{author}</div>
      <Button style={buttonStyle} onClick={handleNewQuote} variant="contained">
        New Quote
      </Button>
    </div>
  );
};
export default QuoteGenerator;
