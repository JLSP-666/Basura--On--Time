import React from 'react'
import TextBox from '../../../UI/Text-Box/Text-Box'
import Button2 from '../../../UI/Button2/Button2'
import './Main.css'

const Main = () => {
  return (
    <>
       <main className="FontGeologica">
  
  {/* Hero Section */}
  <section className="bg-[var(--Voscuro)] text-white py-30  text-center px-6">
    <h1 className="text-4xl font-bold mb-4">Tu ciudad más limpia empieza contigo</h1>
    <p className="text-lg mb-6">Solicitá la recolección de residuos en tu zona con un solo clic.</p>
    <Button2/>
  </section>
  <section className="py-16 px-6 bg-gray-100 text-center">
    <h2 className="text-3xl font-semibold mb-8">Nuestros Servicios</h2>
    <div className="grid md:grid-cols-3 gap-6">          
    <TextBox/>
    <TextBox/>
    <TextBox/>
    </div>  
  </section>
  <section className="py-16 px-6 text-center bg-white">
    <h2 className="text-3xl font-semibold mb-10">¿Cómo funciona?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-4">
        <div className="text-4xl mb-4"></div>
        <h3 className="text-xl font-bold mb-2">1. Registrate</h3>
        <p>Crea tu cuenta y elegí tu zona.</p>
      </div>
      <div className="p-4">
        <div className="text-4xl mb-4"></div>
        <h3 className="text-xl font-bold mb-2">2. Pedí recolección</h3>
        <p>Seleccioná el tipo de residuos y la fecha de retiro.</p>
      </div>
      <div className="p-4">
        <div className="text-4xl mb-4"></div>
        <h3 className="text-xl font-bold mb-2">3. Nosotros pasamos</h3>
        <p>Un camión se encarga de retirarlos según lo programado.</p>
      </div>
    </div>
  </section>
  <section className="bg-green-100 py-16 px-6 text-center">
    <h2 className="text-3xl font-semibold mb-10">Impacto positivo</h2>
    <div className="grid md:grid-cols-4 gap-6">
      <div>
        <h3 className="text-4xl font-bold text-green-700">+10,000</h3>
        <p>Usuarios registrados</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-green-700">+50 Tn</h3>
        <p>Residuos reciclados</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-green-700">+120</h3>
        <p>Camiones activos</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-green-700">24/7</h3>
        <p>Servicio disponible</p>
      </div>
    </div>
  </section>
  

 

</main>
    </>
  )
}

export default Main
