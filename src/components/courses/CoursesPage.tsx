import React from "react";
import {NavLink} from "react-router-dom";
import './course.css';
import DungeonPicture from '../../assets/course_types/dungeon.png';
import RacePicture from '../../assets/course_types/race.png';
import DuelPicture from '../../assets/course_types/duel.png';
import {Button} from "nes-react";


const CoursesPage = () => {
    const courseTypes = ['Dungeon', 'Race', 'Duel'];
    const courseCoverPictures = [DungeonPicture, RacePicture, DuelPicture];
    let i = 0;

    return(
        <div className="CoursesPageContainer">
            <h1>Select course type</h1>
            <div className="CourseTypesGrid">
                    {courseTypes.map(type =>
                        <NavLink key={type} to={`/course-type/${type}`}>
                            <Button className="Tile" style={{backgroundImage: `url(${courseCoverPictures[i++]})`,
                                backgroundPosition: "center", backgroundSize: "cover"}}>
                                    <h3>{type}</h3>
                            </Button>
                        </NavLink>
                    )}
            </div>
        </div>
    )

}

export default CoursesPage;