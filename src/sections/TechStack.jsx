import { motion } from "motion/react";

const cardVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

export default function TechStack() {
    return (
        <div className="p-5 w-full min-h-[200px] flex flex-col justify-center gap-3">
            <p className="text-3xl font-bold text-white underline italic">
                Tech Stack:
            </p>

            {/* TOP ROW */}
            <div className="w-full flex gap-2">
                {[
                    {
                        title: "FRONTEND:",
                        border: "border-green-400 shadow-green-400",
                        content: (
                            <div className="flex flex-wrap w-full gap-1">
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
                                <img className="w-[50px] h-[50px]" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                                <img className="w-[50px] h-[50px]" src="https://vite.dev/logo.svg" />
                            </div>
                        ),
                    },
                    {
                        title: "BACKEND:",
                        border: "border-purple-400 shadow-purple-400",
                        content: (
                            <div className="flex flex-wrap w-full gap-1">
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg" />
                            </div>
                        ),
                    },
                    {
                        title: "DATABASE:",
                        border: "border-red-400 shadow-red-400",
                        content: (
                            <div className="flex flex-wrap w-full gap-1">
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                                <img className="w-[50px] h-[50px] bg-white rounded-md" src="https://logo.svgcdn.com/logos/aws.png" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" />
                            </div>
                        ),
                    },
                ].map((card, i) => (
                    <motion.div
                        key={card.title}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className={`bg-gray-700 p-5 border-1 ${card.border} rounded-md shadow-lg w-full flex flex-col gap-2`}
                    >
                        <p className="text-2xl font-medium text-white">
                            {card.title}
                        </p>
                        {card.content}
                    </motion.div>
                ))}
            </div>

            {/* BOTTOM ROW */}
            <div className="w-full flex gap-2">
                {[
                    {
                        title: "DEVELOPER TOOLS:",
                        border: "border-orange-400 shadow-orange-400",
                        content: (
                            <div className="flex flex-wrap w-full gap-1">
                                <img className="w-[50px] h-[50px]" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                            </div>
                        ),
                    },
                    {
                        title: "OTHERS:",
                        border: "border-pink-400 shadow-pink-400",
                        content: (
                            <div className="flex flex-wrap w-full gap-1">
                                <img className="w-[50px] h-[50px]" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />
                                <img className="w-[50px] h-[50px]" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                                <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                            </div>
                        ),
                    },
                ].map((card, i) => (
                    <motion.div
                        key={card.title}
                        custom={i + 3}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className={`bg-gray-700 p-5 border-1 ${card.border} rounded-md shadow-lg w-full flex flex-col gap-2`}
                    >
                        <p className="text-2xl font-medium text-white">
                            {card.title}
                        </p>
                        {card.content}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}