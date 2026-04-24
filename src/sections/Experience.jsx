export default function Experience() {
    return (
        <div className="p-5 w-full min-h-[200px] flex flex-col gap-6">
            <p className="text-3xl font-bold text-white underline italic">
                Work Experience:
            </p>

            <div className="flex flex-col gap-6">

                {/* EXPERIENCE ITEM */}
                <div className="relative pl-6 border-l-2 border-green-400">
                    {/* Dot */}
                    <div className="absolute -left-[7px] top-2 w-3 h-3 bg-green-400 rounded-full"></div>

                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-center gap-2">
                        <h3 className="text-white text-xl font-semibold">
                            Optik Consultancy
                        </h3>
                        <span className="text-gray-400 text-sm">
                            May – August 2025
                        </span>
                    </div>

                    {/* Role */}
                    <p className="text-green-400 text-sm mb-2">
                        Software Engineer Intern
                    </p>

                    {/* Bullet Points */}
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>
                            Developed and maintained a desktop application using Electron and the MERN stack.
                        </li>
                        <li>
                            Integrated REST APIs with Postman to test and validate requests.
                        </li>
                        <li>
                            Collaborated in an Agile team using Jira and Confluence to deliver production-ready features.
                        </li>
                    </ul>
                </div>

                {/* EXPERIENCE ITEM */}
                <div className="relative pl-6 border-l-2 border-purple-400">
                    <div className="absolute -left-[7px] top-2 w-3 h-3 bg-purple-400 rounded-full"></div>

                    <div className="flex flex-wrap justify-between items-center gap-2">
                        <h3 className="text-white text-xl font-semibold">
                            Engineers Without Borders Australia
                        </h3>
                        <span className="text-gray-400 text-sm">
                            August - November 2024
                        </span>
                    </div>

                    <p className="text-purple-400 text-sm mb-2">
                        Data Analytics/Frontend Developer
                    </p>

                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>
                            Formatted and processed meteorological data to feed into the AI model.
                        </li>
                        <li>
                            Created UI/UX designs via Figma and utilised Blazor's framework to display.
                        </li>
                        <li>
                            Applied problem-solving and technical skills in project-based environments.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}