import React from 'react'
import './Modal.css'
import CerrarBtn from '../assets/imgs/cerrar.svg'

const Modal = ({setModal}) => {
    const ocultarModal = () => {
        setModal(false)
    }
  return (
    <div className='container mx-auto text-center h-auto'>
        <div className='flex flex-row-reverse p-2 justify-between'>
            <img 
                className='w-10' 
                src={CerrarBtn} 
                alt="Cerrar Modal" 
                onClick={ocultarModal}
             />
        </div>
        <form className='container border-2 border-neutral-200 rounded-md bg-neutral-100 p-2'>
                <label 
                    className='bg-neutral-200 rounded-sm w-full p-2 uppercase font-semibold'
                    htmlFor="gasto">Nombre gasto: </label>
                <input className='w-full mb-2 p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-400' type="text" id='gasto' />
                <br />
                <label 
                    className='bg-neutral-200 rounded-sm w-full p-2 uppercase font-semibold'
                    htmlFor="cantidad">Cantidad: </label>
                <input className='w-full mb-2 p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-400' type="number" id='cantidad' />
                <br />
                <label 
                    className='bg-neutral-200 rounded-sm w-full p-2 uppercase font-semibold'
                    htmlFor="filtrarGastos">Filtrar Gastos: </label>
                <select className='w-full mb-2 p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-400' name="select" id="filtrarGastos">
                    <option value="">---</option>
                    <option value="opt-1">Option 1</option>
                    <option value="opt-2">Option 2</option>
                    <option value="opt-3">Option 3</option>
                </select>
                <br />
                <input className='bg-indigo-400 text-white rounded-sm w-full p-1 uppercase font-semibold mb-4' type="button" value="Añadir" />
            </form>
    </div>
  )
}

export default Modal