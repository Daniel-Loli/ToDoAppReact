import React, { useState, useEffect } from 'react';
import s from './ContainerToDos.css';

const ContainerToDos = () => {
  // Estado para almacenar las tareas
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  // Cargar datos almacenados en localStorage al cargar la página
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Manejar el cambio en el input
  const handleInputChange = (e) => {
    if (e.target.name === 'task') {
      setInputValue(e.target.value);
    } else if (e.target.name === 'time') {
      setInputValue2(e.target.value);
    }
  };

  // Manejar el envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Agregar la nueva tarea al arreglo
    const newTodo = { task: inputValue, time: inputValue2 };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    // Limpiar los valores del input
    setInputValue('');
    setInputValue2('');
    // Guardar en localStorage
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Manejar clic en una tarea para eliminarla
  const handleTodoDelete = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
    // Guardar en localStorage
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className={s.Container}>
      {/* Formulario para agregar nuevas tareas */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="task"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Nueva tarea"
        />

        <input
          type="time"
          name="time"
          value={inputValue2}
          onChange={handleInputChange}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>

      {/* Mostrar tareas en la pantalla */}
      <div className={s.todoList}>
        {todos.map((todo, index) => (
          <div key={index} className={s.todo}>

            <h2>{todo.task}</h2>
            <p>{todo.time}</p>
            <span className={s.deleteIcon} onClick={() => handleTodoDelete(index)}>
              &#x2715; {/* Icono "X" */}
            </span>
            {/*trabajando*/}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ContainerToDos;
