import { Fragment, useState, useEffect, useRef } from "react";



function useScroll() {
  const [scroll, setScroll] = useState(false);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);


      if (window.scrollY < lastScrollY.current) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scroll;
}

export default function Navbar() {

  scroll = useScroll()

  if (scroll == true){
    return (
      <Fragment>
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

  }