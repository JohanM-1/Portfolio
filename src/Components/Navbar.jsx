import { Fragment } from "react";




export default function Navbar() {




    return (
      <Fragment>
        <a >Johan Monroy</a>
        <br />
        <a href="">email: example@email.com</a>
        <br />
        <a href="">telfono:33333333333</a>
        <header className="flex justify-center items-center font-sans  relative">

          
          <nav className={`bg-gray-200 p-2 rounded-3xl flex justify-between fixed top-4 w-full md:w-1/2 z-10 ${scroll ? 'bg-gray-200 bg-opacity-55' : ''}`}>
            <a className="text-center flex-grow">Experiencia </a>
            <a className="text-center flex-grow">Proyectos</a>
            <a className="text-center flex-grow">Sobre mí</a>
            <a className="text-center flex-grow">Contacto</a>
          </nav>
        </header>
      </Fragment>
      )

  }