function About() {
    return <div className="flex flex-col h-[60vh]">
        <div className="flex h-[55vh]">
            <div className="w-1/2 flex flex-col items-center justify-center space-y-5">
                <h1 className="
                font-medium
                text-4xl
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-500
                via-red-500
                to-orange-500">About Me</h1>
                <p className="text-[#232121]">
                    I am currently in my penultimate year/3rd year studying Software Engineering at UTS, and harbor a strong passion
                    towards programming and developing applications. This all originated from my liking towards game development through
                    Scratch, C# and Python, in which I produced small-scale games during high school. And with my entrance to the software
                    industry, I hope to not only improve my current coding skillset, but to utilise it in solving real-world problems.
                </p>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center space-y-5">
                <h1 className="
                font-medium
                text-4xl
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-500
                via-red-500
                to-orange-500">Experience</h1>
                <p className="text-[#232121]">
                    Optik Consultancy
                </p>
            </div>
        </div>
        <div className="h-[5vh] flex justify-center items-center">
            <a className="
            bg-gradient-to-r
            from-yellow-500
            via-red-500
            to-orange-500
            text-white
            px-4
            py-2
            rounded" href="../../files/Career Resume - Denver Klein Mesa.pdf" download>Learn more on my resume!</a>
        </div>
    </div>
}

export default About;