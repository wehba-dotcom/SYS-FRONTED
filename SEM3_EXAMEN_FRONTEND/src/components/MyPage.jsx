import React, { useEffect, useState } from "react";
function MyPage() {
  const [cc_course, setCourse] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [date, setDate] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8080/SYS_4SEM_war_exploded/api/customer/customercourses/1"
    );
    const data = await response.json();
    setCourse(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  console.log("det her er date", date);
  console.log("det her er answersWrong", answers);
  const WrongAnswersNumbers = [0, 1, 2, 3, 4, 5];
  return (
    <div>
      <p>All customer courses</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer id</th>
            <th>cc_Id/Title</th>
            <th>AnswersWrong</th>
            <th>FinshDate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cc_course.map((course) => (
            <tr key={course.dto_cCID}>
              <td>{course.dto_Customer.id}</td>
              <td>
                {course.dto_cCID} {course.dto_title}
              </td>
              <form onSubmit={onSubmit}></form>
              {course.dto_goal?.answersWrong ? (
                <td>{course.dto_goal?.answersWrong}</td>
              ) : (
                <td>
                  {" "}
                  <select onChange={(e) => setAnswers(e.target.value)}>
                    {" "}
                    <option>Select number</option>
                    {WrongAnswersNumbers.map((c) => (
                      <option key={c}>{c} </option>
                    ))}{" "}
                  </select>
                </td>
              )}
              {course.dto_goal?.finishDate ? (
                <td>{course.dto_goal?.finishDate}</td>
              ) : (
                <td>
                  <input
                    type="Date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {!course.dto_goal?.finishDate &&
                    !course.dto_goal?.answersWrong && (
                      <button
                        style={{
                          margin: 5,
                          backgroundColor: "gray",
                          border: 25,
                          borderRadius: 5,
                        }}
                      >
                        set goal
                      </button>
                    )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyPage;
