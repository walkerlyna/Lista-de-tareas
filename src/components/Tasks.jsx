import { useState } from "react"

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const agregarTareas = (e) => {
        e.preventDefault();


        if (newTask.trim() !== '') {
            const tiempo = new Date().getTime();
            setTasks([...tasks, { id: tiempo, text: newTask }]);
            setNewTask('');
        }
    };

    const eliminarTareas = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <main>
            <h1>Lista de tareas</h1>

            <form onSubmit={agregarTareas}>
                <section>
                    <input
                        type="text"
                        placeholder="Agrega una tarea"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button>Agregar</button>
                </section>
            </form>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        ● {task.text}
                        <button onClick={() => eliminarTareas(task.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}
