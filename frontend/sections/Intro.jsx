import { isDev } from "../main";


function Intro() {
    return <div className="flex h-[100vh] bg-[#232121] flex-col items-center justify-center lg:flex-row">
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

            <h2 className="font-medium text-2xl text-white">And this is my portfolio website.</h2>
        </div>
        <div className="w-1/2 flex justify-center items-center">
            <img className="w-30 h-30 rounded-full object-cover border-4 border-black lg:h-[80vh]" src=
            {isDev() ? "../../files/photo.jpg" : "assets/files/photo.jpg"} />
        </div>
    </div>
}

export default Intro;