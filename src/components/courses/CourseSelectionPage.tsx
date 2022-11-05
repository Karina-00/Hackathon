import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {Button} from "nes-react";

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
            <div className="CoursesList">
                {courses && courses.map((course: CourseProp) =>
                    <NavLink key={course.id} to={`/course/${course.id}`}>
                        <Button className="CourseButton">
                            <h3>{course.name}</h3>
                        </Button>
                    </NavLink>
                )}
            </div>
        </div>
    )

}

export default CourseSelectionPage;