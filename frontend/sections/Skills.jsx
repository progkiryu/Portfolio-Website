import { motion } from "framer-motion";

function Skills() {

    return (
        <motion.div className="w-full max-w-5xl bg-[#282828] items-center text-white rounded-xl p-5 flex flex-col gap-10"
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}>
            <p className="text-3xl sm:text-4xl font-medium text-center">&lt;Skills 📚 /&gt;</p>

            <hr className="w-full" />

            <h2 className="text-xl text-white">Primary Languages:</h2>
            <div className="w-full flex gap-4 sm:gap-8 justify-center">
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="C++" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Python" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            </div>
            <h2 className="text-xl text-white">Frameworks:</h2>
            <div className="w-full flex gap-4 sm:gap-8 justify-center">
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="React" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Node" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Electron" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Tailwind CSS" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
            </div>
            <h2 className="text-xl text-white">Databases:</h2>
            <div className="w-full flex gap-4 sm:gap-8 justify-center">
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
            </div>
            <h2 className="text-xl text-white">Developer Tools:</h2>
            <div className="w-full flex gap-4 sm:gap-8 justify-center pb-5">
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Visual Studio Code" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                <img className="w-[8vw] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[4vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
            </div>
        </motion.div>
    );
}

export default Skills;