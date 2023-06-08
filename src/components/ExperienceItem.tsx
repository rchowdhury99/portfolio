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
        // <div>
        //     <div className="relative w-200 m-3 border-2 shadow-lg rounded-xl items-center">
        //         {/*Position*/}
        //         <div><h1>{position}</h1></div>

        //         {/*Company*/}
        //         <span>{company}</span>

        //         {/*Dates*/}
        //         <span>{startDate}</span>
        //         <span>{endDate}</span>

        //         {/*Location*/}
        //         <span>{location}</span>

        //         {/*Details*/}
        //         {details.map(item => (
        //             <span>{item}</span>
        //         ))}
        //     </div>
        // </div>
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                        <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                            {startDate}
                        </span>
                        <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                            {position}
                        </h3>
                        <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                            {endDate}
                        </div>
                    </p>
                    <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                        <ul>
                            {details.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </p>
            </li>
        </ol>
    )
}

export default ExperienceItem;