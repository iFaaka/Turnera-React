import React, { useState } from 'react'
import {Boton} from './Boton.js'
import '../stylesheet/Turnera.css'

export const Turnera = () => {
    const [moteros, setMoteros] = useState(8)
    const [horariosSelect, setHorariosSelect] = useState([])



    return (
    <div>
        <h1>¡Bienvenido a la turnera de Motoenvios!</h1>
        <h3>Esta es una aplicacion realizada siguiendo las consignas otorgadas por <a href='https://www.youtube.com/c/HolaMundoDev'>HolaMundoDev</a></h3>

        <code>Tenemos una empresa de motomensajeria que cuenta con 8 vehiculos y entrega turnos cada media hora, al seleccionar un turno <br />
              se debe restar uno de los vehiculos disponibles y quedar el horario marcado como verde, al desclickear este turno queda disponible <br/>
              Si nos quedamos sin vehiculos disponibles la grilla debe tomar el color de rojo en los turnos no ocupados
                    
        </code>

        <h5>Todo esto debe realizarse en menos de 1hs. Mi marca persona: 73 minutos sin el CSS final</h5>

        <h4> Cantidad de vehiculos disponibles: {moteros}</h4>
    <div className='grilla-container'>

      <div className='fila'>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>8:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>8:30</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>10:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>10:30</Boton>

      </div>
 
      <div className='fila'>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>11:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>11:30</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>12:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>12:30</Boton>
      </div>

      <div className='fila'> 
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>13:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>13:30</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>14:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>14:30</Boton>
      </div>
      
      <div className='fila'>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>15:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>15:30</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>16:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>16:30</Boton>
      </div>
      <div className='fila'>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>17:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>17:30</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>18:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>18:30</Boton>
      </div>

      
      <div className='fila'>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>19:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>19:30</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>20:00</Boton>
        <Boton cantMoteros={moteros} setMoteros={setMoteros} horarios={horariosSelect} selectHor={setHorariosSelect}>Borrar</Boton>  
      </div>

    </div>


    </div>
  )
}
