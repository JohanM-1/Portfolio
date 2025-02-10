import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import GithubSvg from '../assets/GithubSvg'

/* eslint-disable react/prop-types */
export default function ProyectoModal({ isOpen, setIsOpen, proyecto }) {
  const { darkMode } = useTheme()

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="px-4 pt-5 pb-4 sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <Dialog.Title as="h3" className={`text-2xl font-semibold leading-6 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {proyecto.titulo}
                      </Dialog.Title>

                      <div className="mt-4">
                        {proyecto.videsrc ? (
                          <iframe 
                            src={proyecto.videsrc}
                            className="w-full aspect-video rounded-lg shadow-md mb-4"
                            frameBorder="0" 
                            scrolling="no" 
                            allowFullScreen 

                            title={`Video del proyecto ${proyecto.titulo}`}
                          />
                        ) : (
                          <img 
                            src={proyecto.imgsrc} 
                            alt={proyecto.titulo}
                            className="w-full rounded-lg shadow-md mb-4"
                          />
                        )}
                      </div>

                      <div className="mt-6 space-y-4">
                        {proyecto.etapas?.map((etapa, index) => (
                          <div key={index} className={`p-4 rounded-lg ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-50'
                          }`}>
                            <h4 className={`text-lg font-medium ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {etapa.titulo}
                            </h4>
                            <p className={`mt-2 ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {etapa.descripcion}
                            </p>
                            {etapa.tecnologias && (
                              <div className="mt-2">
                                <span className={`text-sm font-medium ${
                                  darkMode ? 'text-gray-400' : 'text-gray-700'
                                }`}>
                                  Tecnologías utilizadas:
                                </span>
                                <ul className="mt-1 list-disc list-inside text-sm">
                                  {etapa.tecnologias.map((tech, i) => (
                                    <li key={i} className={
                                      darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }>
                                      {tech}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex gap-4">
                        {proyecto.frontendLink && (
                          <a
                            href={proyecto.frontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                              darkMode 
                                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                                : 'bg-gray-800 hover:bg-gray-700 text-white'
                            }`}
                          >
                            <GithubSvg className="w-5 h-5" />
                            <span>Frontend</span>
                          </a>
                        )}
                        {proyecto.backendLink && (
                          <a
                            href={proyecto.backendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                              darkMode 
                                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                                : 'bg-gray-800 hover:bg-gray-700 text-white'
                            }`}
                          >
                            <GithubSvg className="w-5 h-5" />
                            <span>Backend</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}