import React from 'react'
import NuevoPresupuesto from './nuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({isValidPresupuesto,setIsValidPresupuesto,presupuesto,setPresupuesto}) => {
  return (
    <>
      <header>
        <h1 className='text-center text-2xl pb-2 mt-2 font-bold'>Control de presupuesto</h1>
        {
          isValidPresupuesto ? (
            <ControlPresupuesto 
              presupuesto={presupuesto}
            />
          ) : (
            <>
              <NuevoPresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
              /> 
            </>
          )
        }
        
      </header>
    </>
  )
}

export default Header
