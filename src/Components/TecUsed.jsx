
import PhpSvg from "../assets/PhpSvg"

export default function TecUsed({ component: Component = null, Name = "Ejemplo" }){
    if (Component != null) {
        return(

            <ul className="flex flex-row mb-2 gap-x-2">
            <li>
                <span className="flex gap-x-2 rounded-full text-xs bg-[#7ba8cc] text-white py-1 px-4 ">
                    
                <Component className="w-5 h-5 " />
                    {Name}
                </span>
            </li>
            </ul>
        )
    }

}