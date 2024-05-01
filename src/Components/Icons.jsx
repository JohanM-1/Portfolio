import PhpSvg from "../assets/PhpSvg"
import ReactSvg from "../assets/ReactSvg"
import FastApiSvg from "../assets/FastApiSvg"
import TailwindSvg from "../assets/TailwindSvg"
import PythonSvg from "../assets/PythonSvg"
import KotlinSvg from "../assets/KotlinSvg"

export default function Icons(){
    return(
        <div className="w-full xl:w-2/3 mx-auto grid grid-cols-3 gap-3 font-sans pt-12">
        <div class="flex flex-col justify-center items-center xl:border-l-2 border-solid border-black">
            <PhpSvg class="md:w-40 md:h-40 w-32 h-32 p-1"/>
            <h1>PHP</h1></div>
        <div class="flex flex-col justify-center items-center ">
            <ReactSvg class="md:w-40 md:h-40  w-32 h-32 "/>
            <h1>React</h1></div>
        <div class="flex flex-col justify-center items-center xl:border-r-2 border-solid border-black" >
            <PythonSvg class="md:w-40 md:h-40  w-32 h-32 "/>
            <h1>Python</h1></div>
        <div class="flex flex-col justify-center items-center xl:border-l-2 border-solid border-black">
            <KotlinSvg class="md:w-40 md:h-40  w-32 h-32 "/>
            <h1>Kotlin</h1></div>
        <div class="flex flex-col justify-center items-center">
            <TailwindSvg class="md:w-40 md:h-40  w-32 h-32 "/>
            <h1>Tailwind CSS</h1></div>
        <div class="flex flex-col justify-center items-center xl:border-r-2 border-solid border-black">
            <FastApiSvg class="md:w-40 md:h-40  w-32 h-32 "/>
            <h1>FastAPI</h1></div>
    </div>
    )
}