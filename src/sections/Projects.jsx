import { motion } from "motion/react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.2 },
    },
};

export default function Projects() {
    const sections = [
        {
            title: "Upcoming:",
            color: "border-blue-400 shadow-blue-400",
            projects: [
                {
                    name: "MyGunplaList",
                    desc: "A social media platform for displaying gunpla creations.",
                    tech: ["MERN", "TailwindCSS", "OAuth", "Redis", "AWS", "Docker"],
                    github: "#",
                },
            ],
        },
        {
            title: "Recent:",
            color: "border-green-400 shadow-green-400",
            projects: [
                {
                    name: "Eduscore AI",
                    desc: "AI-powered system to evaluate academic resources for teachers.",
                    tech: ["MERN", "Plasmo", "Google Gemini"],
                    github: "https://github.com/progkiryu/Eduscore-AI",
                },
                {
                    name: "NeuralSpot",
                    desc: "Machine learning platform for detecting facial symptoms associated with strokes.",
                    tech: ["React", "TailwindCSS", "Pytorch"],
                    github: "https://github.com/progkiryu/NeuralSpot",
                },
            ],
        },
        {
            title: "Past:",
            color: "border-purple-400 shadow-purple-400",
            projects: [
                {
                    name: "ThreadFlow",
                    desc: "Workflow management tool for tracking furniture orders.",
                    tech: ["MERN", "Electron"],
                    github: "https://github.com/progkiryu/Brand-Furniture",
                },
                {
                    name: "Cyclone Detection AI",
                    desc: "Deep learning model for identifying cyclone patterns from meteorological data.",
                    tech: ["Blazor", "TensorFlow"],
                    github: "https://github.com/twdly/sds-lnn-ui",
                },
            ],
        },
    ];

    return (
        <div className="p-5 w-full min-h-[200px] flex flex-col gap-6">
            <p className="text-3xl font-bold text-white underline italic">
                Projects:
            </p>

            {sections.map((section) => (
                <motion.div
                    key={section.title}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex flex-col gap-3"
                >
                    <p className="text-xl text-gray-300 font-semibold">
                        {section.title}
                    </p>

                    {section.projects.map((project) => (
                        <motion.div
                            key={project.name}
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                                scale: 1.01,
                                transition: { duration: 0.2 },
                            }}
                            className={`bg-gray-800 p-4 rounded-lg border ${section.color} shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4`}
                        >
                            {/* LEFT */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white text-lg font-semibold">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 text-sm max-w-xl">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT */}
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
                            >
                                GitHub →
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
}