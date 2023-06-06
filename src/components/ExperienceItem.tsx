import React from "react";

type ExperienceItemProps = {
    position: string,
    company: string,
    startDate: string,
    endDate: string,
    location: string,
    details: Array<String>
}

function ExperienceItem({position, company, startDate, endDate, location,
                         details}: ExperienceItemProps) {
    return (
        <div>
            <div>
                <span>{position}</span>
                <span>{company}</span>
                <span>{startDate}</span>
                <span>{endDate}</span>
                <span>{location}</span>
                {details.map(item => (
                    <span>{item}</span>
                ))}
            </div>
        </div>
    )
}

export default ExperienceItem;