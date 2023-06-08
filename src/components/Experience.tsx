import React from "react";
import experienceArray from "../data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20 w-full">
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