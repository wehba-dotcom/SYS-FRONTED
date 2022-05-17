import React, { useState } from "react";
import "../styles/form.css";

const SetGoal = ({ setgoal, getccid, setccid }) => {
  const [dto_answersWrong, setAnswers] = useState("");
  const [dto_finishDate, setDate] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setccid(getccid);
    if (dto_answersWrong) {
      setgoal(getccid, { dto_answersWrong, dto_finishDate });
    } else {
      setgoal(getccid, { dto_finishDate });
    }
  };

  const WrongAnswersNumbers = [1, 2, 3, 4, 5];
  return (
    <form onSubmit={onSubmit}>
      <select
        required
        className="inputfield"
        value={dto_answersWrong}
        onChange={(e) => setAnswers(e.target.value)}
      >
        <option>Select number</option>
        {WrongAnswersNumbers.map((c) => (
          <option key={c}>{c} </option>
        ))}
      </select>

      <br></br>
      <input
        required
        className="inputfield"
        value={dto_finishDate}
        type="Date"
        onChange={(e) => setDate(e.target.value)}
      />
      <br></br>
      <button className="botton" id={getccid}>
        set goal
      </button>
    </form>
  );
};

export default SetGoal;
