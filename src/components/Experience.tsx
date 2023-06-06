import React from "react";
import experienceArray from "../data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience() {
    return (
        <div>
            {experienceArray.map(item => (
                <ExperienceItem 
                    position={item.position}
                    company={item.company}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    location={item.location}
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Experience;