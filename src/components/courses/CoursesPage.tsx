import React from "react";
import {useAppSelector} from "../../hooks";
import Question from "./Question";
import CourseTypeSelection from "./CourseTypeSelection";


const CoursesPage = () => {
    const courses = useAppSelector((state) => state.coursesSlice.courses);
    return (
        <div className="CoursesPageContainer">
            <CourseTypeSelection/>
        </div>
    )

}

export default CoursesPage;