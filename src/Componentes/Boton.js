import React from 'react'
import '../stylesheet/Boton.css'

export const Boton = ({ children,selectHor,horarios,cantMoteros,setMoteros }) => {
  


  const handleClick = () => {
    if(!horarios.includes(children) && cantMoteros > 0 && horarios.length < 8){
      selectHor(prevS => [...prevS,children])
      setMoteros(prevS => prevS - 1)
    } else if(horarios.includes(children)){
      selectHor(prevS => prevS.filter(item => item !== children))
      setMoteros(prevS => prevS + 1)
    }
    if(children === 'Borrar'){
      setMoteros(8)
      selectHor([])
    }
  }

  const changecolor = () => {
    if(horarios.includes(children)){
      return 'select'
    } else if(cantMoteros === 0){
      return 'error'
    }
  }

 
  
  return (
    <div onClick={handleClick} className={`boton ${changecolor()} ${children === 'Borrar' && 'delete'}`}>{children}</div>
  )
}
