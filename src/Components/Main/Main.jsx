import React from 'react'
import iconFree from '../../Assets/Img/Icons/gratis.png'
import iconPriority from '../../Assets/Img/Icons/prioridad.png'
import iconObjetivo from '../../Assets/Img/Icons/objetivo.png'

function Main() {
  return (
    <div className='flex justify-around'>
    <div className='flex flex-col md:w-11/12 lg:8/12 md:flex-row justify-around items-center'>
    <div className='flex flex-col m-4 sm:w-1/2 sm:mx-12'>
            <p className='text-roboto'>Reserva fácilmente</p>
            <p className='font-volkhov text-4xl'>Menuda Ciba</p>
            <div className='flex w-full text-roboto justify-start items-center h-24'>
                <img className='w-12 my-2 mr-2' src={iconFree} alt='Gratis'/>
                <p>Aquest servei és totalment gratuït</p>
            </div>
            <div className='flex w-full text-roboto justify-start items-center h-24'>
                <img className='w-12 my-2 mr-2' src={iconPriority} alt='Gratis'/>
                <p className='w-full'> Es prioritzarà les sol·licituds de famílies 
                monomarentals o dones en situació de violència de
                gènere, i famílies sense xarxa</p>
            </div>
            <div className='flex w-full text-roboto justify-start items-center h-24'>
                <img className='w-12 my-2 mr-2' src={iconObjetivo} alt='Gratis'/>
                <p> L'objectiu 
                del Projecte Concilia és contribuir a l’harmonització de 
                la vida laboral, familiar i personal
                </p>
            </div>
        </div>
        <div className='w-96 h-96 flex justify-center items-center'>
            <div className="w-11/12 h-5/6 bg-verde-ciba rounded-2xl">

            </div>

        </div>
        </div>
        </div>
    
  )
}

export default Main