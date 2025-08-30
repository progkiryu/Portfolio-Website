function Skills() {
    return <div className="flex h-[60vh]">
        <div className="w-1/2 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-xl text-[#232121]">Primary Languages:</h2>
            <div className="w-1/2 flex space-x-5 justify-center">
                <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            </div>
            <h2 className="text-xl text-[#232121]">Frameworks:</h2>
            <div className="w-1/2 flex space-x-5 justify-center">
                <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
            </div>
            <h2 className="text-xl text-[#232121]">Databases:</h2>
            <div className="w-1/2 flex space-x-5 justify-center">
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
            </div>
            <h2 className="text-xl text-[#232121]">Developer Tools:</h2>
            <div className="w-1/2 flex space-x-5 justify-center">
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
            </div>

        </div>
        <div className="w-1/2 flex flex-col items-center justify-center space-y-4">
            <h1 className="
            font-medium
            text-4xl
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-yellow-500
            via-red-500
            to-orange-500">Skills</h1>
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

export default Skills;