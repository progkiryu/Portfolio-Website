import { isDev } from "../main";


function Intro() {
    return (
        <div className="flex flex-col lg:flex-row w-3/4 min-h-screen bg-[#232121] items-center justify-center px-10 space-y-2">
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-1/2">
                <div className="text-center space-y-2 py-6">
                    <h1 className="font-medium text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
                        My name is Denver Klein Mesa.
                    </h1>
                    <h2 className="font-medium text-2xl text-white">
                        And this is my portfolio website.
                    </h2>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    {["about", "skills", "contact"].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="text-white font-medium text-2xl transition ease-in-out duration-300 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-orange-500 hover:scale-125"
                        >
                            {section.toUpperCase()}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-1/2 lg:h-[70vh] lg:w-1/2">
                <img
                    className="w-[50vw] sm:w-[35vw] h-full rounded-full object-cover border-4 border-black"
                    src={isDev() ? "../../files/photo.jpg" : "assets/files/photo.jpg"}
                    alt="look at this guy bro"
                />
            </div>
        </div>
    );
}

export default Intro;