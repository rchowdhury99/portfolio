import React from "react";

type ExperienceItemProps = {
    position: string,
    company: string,
    startDate: string,
    endDate: string,
    location: string,
    details: Array<String>
}

function ExperienceItem({ position, company, startDate, endDate, location,
                          details }: ExperienceItemProps) {
    return (
        <div>
            <div className="relative w-200 m-3 border-2 shadow-lg rounded-xl items-center">
                {/*Position*/}
                <div><h1>{position}</h1></div>

                {/*Company*/}
                <span>{company}</span>

                {/*Dates*/}
                <span>{startDate}</span>
                <span>{endDate}</span>

                {/*Location*/}
                <span>{location}</span>

                {/*Details*/}
                {details.map(item => (
                    <span>{item}</span>
                ))}
            </div>
        </div>
    )
}

export default ExperienceItem;