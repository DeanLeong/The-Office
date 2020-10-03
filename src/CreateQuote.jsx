import React, { useState } from "react";
import axios from "axios";

function CreateQuote(props) {
  const [person, setPerson] = useState("Name of who said the quote");
  const [text, setText] = useState("Text of quote");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      person,
      text,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/quotes`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    props.setFetchQuote(!props.setQuote);
    setPerson("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="person">Person:</label>
      <input
        name="person"
        type="text"
        placeholder="person"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
      <label htmlFor="text">Text:</label>
      <input
        name="text"
        type="text"
        placeholder="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Send Quote</button>
    </form>
  );
}

export default CreateQuote;
