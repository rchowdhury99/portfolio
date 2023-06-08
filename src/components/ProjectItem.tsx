import React from "react";

type ProjectItemProps = {
    projectName: string,
    techStack: Array<String>,
    link: string,
    description: string,
    imgURL: string
}

function ProjectItem({ projectName, techStack, link, description,
                       imgURL }: ProjectItemProps) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <img 
                src={imgURL}
                alt={projectName}
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{projectName}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {techStack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default ProjectItem;