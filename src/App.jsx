import React, { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './assets/imgs/nuevo-gasto.svg'
import Modal from './components/Modal'

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [modal, setModal] = useState(false)
  const handleNuevoGasto = () => {
    console.log("Nuevo Gasto")
    setModal(true)
  }
  return (
    <>
      <Header 
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
      {
        isValidPresupuesto && (
          <div className='container mx-auto text-center mt-5 h-auto'>
            <div className='flex flex-row-reverse p-5 justify-between'>
              <img 
                className='w-12' 
                src={IconoNuevoGasto} 
                alt="IconoNuevoGasto" 
                onClick={handleNuevoGasto}
              />
            </div>
          </div>
        )
      }
      {
        modal && (
          <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-black bg-opacity-10 h-auto pb-5 px-5 rounded-md'>
              <Modal 
                setModal={setModal}
              />
            </div>
          </div>
        )
      }
    </>
  )
}

export default App
