import React from 'react';
import s from './Mapeo.css';

const Mapeo = () => {

    const alumnos=[
        {
            id:1,
            nombre:'Juan',
            edad:20
        },
        {
            id:2,
            nombre:'Pedro',
            edad:21
        },
        {
            id:3,
            nombre:'Maria',
            edad:22
        },
        {
            id:4,
            nombre:'Jose',
            edad:23
        },
        {
            id:5,
            nombre:'Luis',
            edad:24
        }
    ]

    const listaAlumnos=alumnos.map((alumno)=>(
        <li key={alumno.id}>
            {alumno.nombre} - {alumno.edad}
        </li>
    ))

  return (
    <div className={s.lista}>
        <ul>
            {listaAlumnos}
        </ul>
    </div>
  )
}

export default Mapeo