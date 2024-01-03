import React from 'react'
import s from './Formulario.css'

const Formulario = () => {
  return (
    <form className={s.Formulario}>
      <label>Ingresa la actividad</label>
      <input placeholder="Estudiar programación"/>

      <label>Selecciona la hora</label>
      <input type="time"  placeholder="Estudiar programación"/>
    </form>
)
}

export default Formulario