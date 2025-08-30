function About() {
    return <div className="flex h-[60vh] bg-[#232121]">
        <div className="w-1/2 flex flex-col justify-center">
            <h1 className="
            font-medium
            text-4xl
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r 
            from-yellow-500 
            via-red-500 
            to-orange-500">My name is Denver Klein Mesa.</h1>

            <p className="bg-white bg-clip-text text-transparent">
            I am currently in my penultimate year/3rd year studying Software Engineering at UTS, and harbor a strong passion
            towards programming and developing applications. This all originated from my liking towards game development through
            Scratch, C# and Python, in which I produced small-scale games during high school. And with my entrance to the software
            industry, I hope to not only improve my current coding skillset, but to utilise it in solving real-world problems.
            </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
            <img className="max-w-full max-h-full rounded-full object-cover border-4 border-black" src="../../files/photo.jpg" />
        </div>
    </div>
}

export default About;