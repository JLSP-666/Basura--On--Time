import React from 'react'
import './Camiones.css'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const Camiones = () => {
    return (
        <section className='sectFirst'>
            <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] position fixed left-0'>
                <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
                <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
            </div >
            <div className='DivCamion gap-10 FontGeologica bg-[var(--Voscuro2)]'>
            <h1 className='text-6xl text-white text-left'>Gestion de camiones</h1>
            <div className='flex flex-initial gap-30'>
                <button className='group cursor-pointer rounded-md w-50 h-14 bg-[var(--Vclaro3)] text-white text-xl transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>Agregar</button>
                <input type="text" className='text-white rounded-md border-1 border-[var(--Vclaro3)] text-center w-100 text-xl ' placeholder='Buscar camion...' />
            </div >
            <div className='text-white h-120 w-180'>
                <div className='flex justify-around items-center text-center rounded-t-md h-25 gap-3 text-xl border-1 border-[var(--Vclaro3)] bg-[var(--Voscuro4)]'>
                    <p>Nombre</p>
                    <p>Placa</p>
                    <p>Estado</p>
                    <p>Accion</p>
                </div>
                <div className='flex justify-around items-center text-center h-25 gap-3 border-1 border-[var(--Vclaro3)] text-xl'>
                    <p>Camion 1</p>
                    <p>ABC-123</p>
                    <p>Activo</p>
                    <div className='flex flex-initial gap-2 justify-center align-center'>
                        <button className='flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Vclaro3)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                                                <MdEdit className='transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' /></button>
                        <button className='flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Rojo)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                                                <AiOutlineDelete className='transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' /></button>
                    </div>
                </div>
                <div className='flex justify-around items-center text-center h-25 gap-3 border-1 border-[var(--Vclaro3)] text-xl '>
                    <p>Camion 2</p>
                    <p>DEF-456</p>
                    <p>Inactivo</p>
                    <div className='flex flex-initial gap-2 justify-center align-center'>
                        <button className='group cursor-pointer flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Vclaro3)] text-white transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                                                <MdEdit className='transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' /></button>
                        <button className='flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Rojo)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                                                <AiOutlineDelete className='transition-transform duration-300 group-hover:rotate-2group-hover:scale-105' /></button>
                    </div>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Camiones
