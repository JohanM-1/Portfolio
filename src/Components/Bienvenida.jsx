import GithubSvg from "../assets/GithubSvg"
import LinkedinSvg from "../assets/LinkedinSvg"
import person from '../imagenes/PersonaIcon.png'; 

export default function Bienvenida(){
    return(
        <div class="w-full xl:w-2/3 mx-auto grid grid-cols-5 gap-5 font-sans">
        <section class="col-span-5 md:col-span-2 md:flex md:flex-col text-center pt-16">
            <div class="flex justify-center items-center">
                <img class="p-1 max-w-52 rounded-3xl" src={person} alt="Imagen de Persona"/>
            </div>
            <div class="flex justify-center items-center">
                <GithubSvg class="w-10 h-10 center" />
                <LinkedinSvg class="w-12 h-12 center"/>
            </div>
        </section>
        <section class="justify-center col-span-5 md:col-span-3 md:flex md:flex-col  items-center">
            <h1 class="text-xl pt-4  md:text-left">¡Hola y bienvenido/a! Soy un estudiante de desarrollo de software apasionado por resolver problemas a través del diseño de software, Estoy comprometido con la excelencia y siempre en búsqueda de nuevas formas de mejorar y crecer en este emocionante campo. ¡Espero que disfrutes explorando mi trabajo!</h1>
        </section>
        </div>
    )
}