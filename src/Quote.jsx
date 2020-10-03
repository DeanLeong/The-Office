import React, { useState } from "react";
import axios from "axios";

function Quote(props) {
  return (
    <div className="quote">
      <h3>{props.quote.fields.Person}</h3>
      <p>{props.quote.fields.Quote}</p>
    </div>
  );
}

export default Quote;
