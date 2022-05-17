import React, { useEffect, useState } from "react";
import SetGoal from "./SetGoal";
import "../styles/mypage.css";

function MyPage() {
  const [cc_course, setCourse] = useState([]);
  const [goal, setGoal] = useState([]);
  const [cc_id, setCcID] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8080/SYS_4SEM_war_exploded/api/customer/customercourses/1"
    );
    const data = await response.json();
    setCourse(data);
  };

  useEffect(() => {
    fetchData();
  }, [goal]);

  console.log(goal);
  const setGoalOnCC = async (id, task) => {
    const res = await fetch(
      "http://localhost:8080/SYS_4SEM_war_exploded/api/customer/setgoal/" + id,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const data = res;
    setGoal({ data });
  };

  return (
    <div>
      <div className="tablediv">
        <p style={{ textAlign: "center" }}>All customer courses</p>
        <table style={{ width: 750 }} className="table table-striped">
          <thead>
            <tr
              style={{ backgroundColor: "darkgray" }}
              className="myGoalTableContent"
            >
              {/* <th>Customer id</th> */}
              {/* <th>cc_Id/Title</th> */}
              <th>Title</th>
              <th>Wrong Answers</th>
              <th>Finsh Date</th>
              <th>Set/Update</th>
            </tr>
          </thead>
          <tbody className="myGoalTableContent">
            {cc_course.map((course) => (
              <tr key={course.dto_cCID}>
                {/* <td>{course.dto_Customer.id}</td> */}
                {/* <td>
                {course.dto_cCID} {course.dto_title}
              </td> */}
                <td className="border">
                  <strong>{course.dto_title}</strong>
                </td>

                {course.dto_goal?.answersWrong ||
                course.dto_goal?.answersWrong === 0 ? (
                  <td className="border">{course.dto_goal?.answersWrong}</td>
                ) : (
                  <td className="border">You have not set a goal yet</td>
                )}
                {course.dto_goal?.finishDate ? (
                  <td>{course.dto_goal?.finishDate}</td>
                ) : (
                  <td>You have not set a goal yet</td>
                )}
                <td className="border">
                  {!course.dto_goal?.finishDate ||
                  !course.dto_goal?.answersWrong ? (
                    <SetGoal
                      setccid={setCcID}
                      setgoal={setGoalOnCC}
                      getccid={course.dto_cCID}
                    />
                  ) : (
                    <button>update</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyPage;
