import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";

type CourseProp = {
    id: number,
    name: string
}

const CourseSelectionPage = () => {
    const [courses, setCourses] = useState<any[]>([]);

    useEffect( () => {
        fetch('https://chilledu-backend.herokuapp.com/api/games')
        .then((response) => response.json()
        ).then((res) => {
            console.log(res.games);
            setCourses(res.games);
        });
    }, []);

    const { type } = useParams();
    return (
        <div className="CoursesPageContainer">
            <h1>{type}</h1>
            {courses && courses.map((course: CourseProp) =>
                <NavLink key={course.id} to={`/course/${course.id}`}>
                    <button className="Tile">
                        <h3>{course.name}</h3>
                    </button>
                </NavLink>
            )}
        </div>
    )

}

export default CourseSelectionPage;