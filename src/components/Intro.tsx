import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-10 pb-6">
            <h1 className="text-4xl md:text-5xl mb-1 md:mb-3 font-bold">Reizwan Chowdhury</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Teacher</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Hi there!
                I'm a software engineer interested in machine learning, web development, and data engineering.
                I graduated from the <span className="text-blue-600">University of Toronto</span> with a <span className="text-rose-400">Statistics</span> specialization (major) in <span className="text-rose-400">Machine Learning</span> and <span className="text-rose-400">Data Science</span>.
                In my free time, I enjoy playing sports and games, eating good food, and teaching people math and programming.
            </p>
        </div>
    )
}

export default Intro;