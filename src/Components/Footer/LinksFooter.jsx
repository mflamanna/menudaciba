import React from 'react'
import { Link } from 'react-router-dom'
import ContactFooter from './ContactFooter'

function LinksFooter() {
  return (
    <div className='w-6/12 flex justify-around text-violeta-ciba p-4 text-lg font-bebas'>
      <Link to='/sobrenosotros' className='hover:text-white'><p>Sobre Nosotr@s</p></Link>
      <Link to='/equipo' className='hover:text-white'><p>Equipo</p></Link>
      <Link to='/reservar' className='hover:text-white'><p>Reservas</p></Link>
      <ContactFooter/>
    </div>
  )
}

export default LinksFooter