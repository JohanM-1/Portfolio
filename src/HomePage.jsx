import React, { Fragment } from "react"
import Navbar from "./Components/Navbar"

import Bienvenida from "./Components/Bienvenida"

import Icons from "./Components/Icons"
import Proyecto from "./Components/Proyecto"
import ReactSvg from "./assets/ReactSvg"
import PythonSvg from "./assets/PythonSvg"
import SqlAlqSvg from "./assets/SqlAlqSvg"
import imgProyect1 from "./imagenes/FastApiCRUD1.png"



export default function HomePage() {
    return (

        <div className=" flex items-center justify-center">
            <div className="w-full xl:w-2/3 flex flex-col  px-4 mt-40">
            <Navbar/>
            <Bienvenida/>
            <Icons/>
            <Proyecto 
            tiulo="API-CRUD de Foro con FastAPI y SQLAlchemy" 
            component1={PythonSvg} compName1={"Python"} 
            component2={SqlAlqSvg} compName2={"SQLAlchemy"}
            descripcion="Optimizada con SQLAlchemy 2.0 ORM async, esta API ofrece una gestión eficaz de foros y usuarios con seguridad y eficiencia. Permite crear, visualizar y eliminar foros, además de agregar comentarios, todo ello con una sólida autenticación y autorización integradas para una experiencia de usuario segura."
            link="https://github.com/afkm5/FastApi-CRUD-Foro-Usuarios"
            imgsrc={imgProyect1}
            />
       
        </div>
        </div>

    )
  }
