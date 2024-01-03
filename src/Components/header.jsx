import React from "react";
import s from './Header.css';


export default function Hola(){
    return(
        <div className={`${s.container}`}>
            
            <h1 className={s.title}>ToDo-App</h1>
        
        </div>
    )
}