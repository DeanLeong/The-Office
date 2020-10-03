import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Quote from "./Quote";

function App() {
  const [quote, setQuote] = useState([]);
  const [fetchQuote, setFetchQuote] = useState([]);

  useEffect(() => {
    const getQuote = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/quotes`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records);
      setQuote(response.data.records);
    };
    getQuote();
  }, []);

  return (
    <div className="App">
      document.title = "The office Quotes"
      <h1>Welcome to The Office</h1>
      {quote.map((quote) => (
        <Quote
          key={quote.id}
          quote={quote}
          fetchQuote={fetchQuote}
          setFetchQuote={setFetchQuote}
        />
      ))}
    </div>
  );
}

export default App;
