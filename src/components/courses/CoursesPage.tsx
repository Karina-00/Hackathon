import React from "react";
import {NavLink} from "react-router-dom";
import './course.css';


const CoursesPage = () => {
    const courseTypes = ['Dungeon', 'Race', 'Duel'];

    return(
        <div className="CoursesPageContainer">
            <h1>Select course type</h1>
            <div className="CourseTypesGrid">
                {courseTypes.map(type =>
                    <NavLink key={type} to={`/course-type/${type}`}>
                        <button className="Tile">
                            <h3>{type}</h3>
                        </button>
                    </NavLink>
                )}
            </div>
        </div>
    )

}

export default CoursesPage;