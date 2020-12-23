import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income " : "Expense "}
      for $100 in category {isIncome ? " Business " : " House "}
      for {isIncome ? "next Monday" : " next Tuesday"}...
    </div>
  );
};

export default InfoCard;
