
import React,{useEffect,useState} from 'react'
function MyPage() {
    const [cc_course, setCourse]=useState([])
    const fetchData=async ()=>{
        const response =await fetch("http://localhost:8080/SYS_4SEM_war_exploded/api/customer/customercourses/1");
        const data = await response.json();
        setCourse(data)
        console.log(data)
    }

useEffect(()=>{
    fetchData()
},[])


    return(
        <div>
            <p>All Courses Available</p>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>CustomerCourseId</th>
                <th>AnsowrWrong</th>
                <th>FinshDate</th>
               
            </tr>
        </thead>
        <tbody>
               
            
    {cc_course.map((course) => (<tr key={course.dto_cCID}>
        <td>{course.dto_cCID}</td>
        <td>{course.dto_goal.answersWrong}</td>
        <td>{course.dto_goal.finishDate}</td>

        
        </tr>))}
        </tbody>
    </table>
    </div>

    );
}

export default MyPage;
