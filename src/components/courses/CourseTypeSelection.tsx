import React from "react";
import './course.css';
import {NavLink} from "react-router-dom";


const CourseTypeSelection = () => {
    const courseTypes = ['Dungeon', 'Race', 'Duel']
    return(
        <div>
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


export default CourseTypeSelection;