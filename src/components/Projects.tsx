import React from "react";
import projectsArray from "../data/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsArray.map(project => (
                    <ProjectItem 
                        projectName={project.projectName}
                        techStack={project.techStack}
                        link={project.projectName}
                        description={project.projectName}
                        imgURL={project.imgURL}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;