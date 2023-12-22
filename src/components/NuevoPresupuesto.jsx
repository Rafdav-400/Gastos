import React, { useState } from 'react'
import Error from './Error'

const NuevoPresupuesto = ({presupuesto,setPresupuesto,setIsValidPresupuesto}) => {
  const [mensaje, setMensaje] = useState("")
  const [error, setError] = useState(false)
  const onClick = (e) => {
    e.preventDefault()
    {/*console.log(presupuesto)*/}
    if (presupuesto <= 0) {
      setIsValidPresupuesto(false)
      setError(true)
      setMensaje("Presupuesto no válido")
      {/*console.log(presupuesto)*/}
      return
    }
    setError(false)
    setMensaje("")
    setIsValidPresupuesto(true)
  }
  const onChange = (e) => {
    setPresupuesto(Number(e.target.value))
  }
  return (
    <div className='justify-center bg-slate-200'>
        <h1 className='text-center text-xl font-semibold'>Presupuesto</h1>
      <div className='flex justify-center'>
        <label htmlFor="" />
        <input 
          placeholder={presupuesto}
          onChange={onChange}
          className='p-1 my-2 border rounded-md border-orange-500'
          type="number" />
      </div>
      <div className='flex justify-center'>
        <form className='flex flex-col align-middle max-w-sm'>
          <input 
            onClick={onClick}
            type='button'
            className='border px-2 py-1 rounded-md bg-indigo-500 text-white uppercase font-bold text-md hover:bg-indigo-600 transition-colors'
            value="Establecer presupuesto"
          />
          <br />
          {
            error && <Error 
                        mensaje={mensaje}  
                      />
          }
        </form>
      </div>
    </div>
  )
}

export default NuevoPresupuesto