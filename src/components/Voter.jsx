import React from "react";
import { useState } from "react";
import * as api from "../utils/api";

const Voter = ({ votes, articleId }) => {
  const [votecrement, setVotecrement] = useState(0);

  const handleIncrement = (incVotes) => {
    setVotecrement((currentVotecrement) => {
      return currentVotecrement + incVotes;
    });
    api.patchArticle(articleId, incVotes).catch(() => {
      setVotecrement((currentVotecrement) => {
        return currentVotecrement - incVotes;
      });
    });
  };

  return (
    <div>
      <button disabled={} onClick={() => handleIncrement(1)}>+</button>
      <p>{votes + votecrement}</p>
      <button disabled={} onClick={() => handleIncrement(-1)}>-</button>
    </div>
  );
};

export default Voter;
