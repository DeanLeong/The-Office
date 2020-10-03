import React, { useState } from "react";
import axios from "axios";
//import UpdateQuote from "./UpdateQuote";

function Quote(props) {
  return (
    <div className="quote">
      <h3>{props.quote.fields.Person}</h3>
      <p>{props.quote.fields.Quote}</p>
      {/* <UpdateQuote
        quote={props.review}
        fetchQuote={props.fetchQuote}
        setFetchQuote={props.setFetchQuote}
      /> */}
    </div>
  );
}

export default Quote;
