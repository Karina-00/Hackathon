import React from "react";
import {useAppSelector} from "../../hooks";
import Question from "./Question";
import {NavLink, useParams} from "react-router-dom";


const CourseSelectionPage = () => {
    const { type } = useParams();
    const courses = useAppSelector((state) => state.coursesSlice.courses);
    return (
        <div className="CoursesPageContainer">
            <h1>{type}</h1>
            {courses.map(course =>
                <NavLink key={course.id} to={`/course/${course.id}/0`}>
                    <button className="Tile">
                        <h3>{course.name}</h3>
                    </button>
                </NavLink>
            )}
        </div>
    )

}

export default CourseSelectionPage;