import React from 'react'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'
import "./Admin.css"

const Admin = () => {
  return (
   <>
   <section className='sectFirst glass p-[50px] place-items-center'>
    <div className='flex flex-col justify-center items-center'>
         <img className='Img-logo' src={logoBasuraOnTime} alt="" />
        <p className='FontCursive text-6xl text-center text-white'>BASURA ON TIME</p>    
    </div>
    <div className='FontGeologica flex flex-col justify-center items-center gap-3.5 bg-[var(--Voscuro2)] w-120 h-100 rounded-4xl'>
        <p className='FontCursive text-5xl p-10 text-white'> Administrador</p>
        <input type="text" placeholder='Usuario' className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' />
        <input type="text" placeholder='Contraseña' className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' />
        <button className='rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'> iniciar sesion </button>
    </div>
   </section>
   </>
  )
}

export default Admin
