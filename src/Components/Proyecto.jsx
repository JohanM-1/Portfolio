import GithubSvg from "../assets/GithubSvg";
import ReactSvg from "../assets/ReactSvg";
import TailwindSvg from "../assets/TailwindSvg";
import TecUsed from "./TecUsed";
import PhpSvg from "../assets/PhpSvg";
import { Fragment } from "react";
import CodeSvg from "../assets/CodeSvg";




export default function Proyecto(
    {imgsrc= "src/imagenes/EjemploProyecto.png", 
    tiulo = "Titulo Ejemplo", 
    descripcion = "Ejemplo descripcion",
    link = "https://www.google.com",
    component1: Svg1 , component2: Svg2 , component3: Svg3,
    compName1: name1, compName2: name2, compName3: name3 }){
    return(
        <Fragment>

        <div className="flex items-center justify-center">
        <h2 className="w-2/3 mx-auto pt-14 text-3xl font-semibold text-black/80 flex items-center ">
            <CodeSvg className="w-14 h-14" />
            Proyectos
        </h2>
        </div>
        <article class="w-full xl:w-2/3 mx-auto grid grid-cols-2 gap-2 font-sans pb-12">
            <section class="col-span-2 md:col-span-1 md:flex md:flex-col text-center ">
                <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <img class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50" src={imgsrc} alt="Imagen de Proyecto"/>
                </div>

            </section>
            <section class=" col-span-2 md:col-span-1 md:flex md:flex-col  items-center ">
                <div className="w-full">
                    <h3 class="text-2xl font-bold text-gray-800 ">{tiulo}</h3>
                    <div className="flex flex-wrap mt-2 gap-1">
                    <TecUsed component={Svg1} Name={name1}/>
                    <TecUsed component={Svg2} Name={name2}/>
                    <TecUsed component={Svg3} Name={name3}/>
                    </div>
                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                        {descripcion}
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
                        <GithubSvg className="md:w-5 md:h-5 w-8 h-8" />
                        Code
                    </a>
                    </footer>
                </div>
            </section>
        </article>
        </Fragment>

    )
}