import React from "react";
import {useAppSelector} from "../../hooks";
import Question from "./Question";
import CourseTypesGrid from "./CourseTypesGrid";


const CoursesPage = () => {
    const courseSlice = useAppSelector((state) => state.coursesSlice);
    return (
        <div className="CoursesPageContainer">
            <CourseTypesGrid/>
            {/*<p>Course name: {courseSlice.name}</p>*/}
            {/*{courseSlice.questions.map(question => (*/}
            {/*    <Question question={question}/>*/}
            {/*))}*/}
        </div>
    )

}

export default CoursesPage;