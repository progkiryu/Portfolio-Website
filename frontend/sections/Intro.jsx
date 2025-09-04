import { isDev } from "../main";


function Intro() {
    return <div className="w-3/4 flex h-[100vh] bg-[#232121] flex-col items-center justify-center space-y-10
    sm:flex-row sm:space-y-0">
        <div className="w-full flex flex-col items-center justify-center w-1/2 space-y-4">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="
                font-medium
                text-4xl
                text-center
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                from-yellow-500 
                via-red-500 
                to-orange-500">My name is Denver Klein Mesa.</h1>

                <h2 className="font-medium text-center text-2xl text-white">And this is my portfolio website.</h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <a href="#about" className="text-white font-medium text-2xl 
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-orange-500
                hover:scale-125 transition ease-in-out duration-300 transform">ABOUT</a>
                <a href="#skills" className="text-white font-medium text-2xl
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-orange-500
                hover:scale-125 transition ease-in-out duration-300 transform">SKILLS</a>
                <a href="#contact" className="text-white font-medium text-2xl
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-orange-500
                hover:scale-125 transition ease-in-out duration-300 transform">CONTACT</a>
            </div>
        </div>
        <div className="w-full flex justify-center items-center sm:w-1/2">
            <img className="w-full w-[50vw] h-[40vh] rounded-full object-cover border-4 border-black
            sm:w-[25vw] sm:h-[60vh]" src=
            {isDev() ? "../../files/photo.jpg" : "assets/files/photo.jpg"} />
        </div>
    </div>
}

export default Intro;