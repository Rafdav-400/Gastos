import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
  const formatearCantidad = (cantidad) => {
      return cantidad.toLocaleString('en-US',{
      style:'currency',
      currency:'USD'
    })
  }
  
  return (
    <div>
        <div className='flex flex-col h-auto'>
            <div className='h-1/2 px-5 font-bold text-xl'>
              <span className='bg-neutral-200 rounded-sm border-2 border-neutral-400 p-1'>Grafica aquí</span>
            </div>
            <br />
            <div className='h-1/2 px-5'>
                <p>
                  <span className='bg-neutral-300 rounded-sm font-semibold text-md p-1'>Presupuesto: </span>
                  <span className='bg-neutral-200 rounded-sm p-1'>{`${formatearCantidad(presupuesto)}`}</span>
                </p>
                <p>
                  <span className='bg-neutral-300 rounded-sm font-semibold text-md p-1'>Disponible: </span>
                  <span className='bg-neutral-200 rounded-sm p-1'>{`${formatearCantidad(presupuesto)}`}</span>
                </p>
                <p>
                  <span className='bg-neutral-300 rounded-sm font-semibold text-md p-1'>Gastado: </span>
                  <span className='bg-neutral-200 rounded-sm p-1'>{`${formatearCantidad(presupuesto)}`}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ControlPresupuesto