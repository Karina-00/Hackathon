import React from "react";
import './course.css';


const CourseTypesGrid = () => {
    const courseTypes = ['Dungeon', 'Race', 'Duel']
    return(
        <div>
            <h1>Select course type</h1>
            <div className="CourseTypesGrid">
                {courseTypes.map(type =>
                    <div onClick={handleClick} className="Tile">
                        {type}
                    </div>
                )}
            </div>
        </div>
    )
}


export default CourseTypesGrid;