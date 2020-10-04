import React, { useState } from "react";
import axios from "axios";
import UpdateQuote from "./UpdateQuote";

function Quote(props) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    setDeleted(true);
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/quote/${props.quote.id}`;
      await axios.delete(airtableURL, {
        headers: {
          Auhthorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchReviews(!props.fetchReviews);
      setDeleted(false);
    }, 2000);
  };

  return (
    <div className="quote">
      <h3>{props.quote.fields.Person}</h3>
      <p>{props.quote.fields.Quote}</p>
      <button onClick={handleDelete}>{deleted ? "Deleted" : "Delete"}</button>
      <UpdateQuote
        quote={props.quote}
        fetchQuote={props.fetchQuote}
        setFetchQuote={props.setFetchQuote}
      />
    </div>
  );
}

export default Quote;
