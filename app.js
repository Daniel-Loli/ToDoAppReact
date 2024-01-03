import React from "react";
import {render}from 'react-dom';
import Hola from './src/Components/header.jsx';
import Main from './src/Components/Main.jsx';
import Mapeo from "./src/Components/Mapeo.jsx";
import './app.css';
import Formulario from "./src/Components/Formulario.jsx";
import ContainerToDos from './src/Components/ContainerToDos.jsx';


render(
    <div>
    <Hola/>

    <ContainerToDos/>


    </div>
,document.getElementById('App'));