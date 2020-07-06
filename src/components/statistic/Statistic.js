import React from "react";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  // console.log(total);
  // console.log(positivePercentage);
  return (
    <>
      <h2>Statistic:</h2>
      {total > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Statistic;
