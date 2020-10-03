import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const getQuote = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/quotes`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records);
    };
    getQuote();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to The Office</h1>
    </div>
  );
}

export default App;
