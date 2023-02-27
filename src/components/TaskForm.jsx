import { useState, useContext } from 'react'
import { TaskContext } from "../context/TaskContext";


function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { createTask } = useContext(TaskContext);

    //const [ids, setIds] = useState(4)

    const handleSubmit = (e) => {
        e.preventDefault()
        /*setIds(ids + 1)
        const newTask = {
            title,
            id: ids,
            description: "algo nuevo"
        }*/
        //createTask(newTask)
        createTask({ title, description });
        setTitle("");
        setDescription("");
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>Agrega tu tarea</h1>
                <input type="text" placeholder="Escribe tu tarea" onChange={(e) =>
                    setTitle(e.target.value)
                } value={title} className="bg-slate-300 p-3 w-full mb-2" autoFocus />
                <textarea placeholder='Describe la descripción de la tarea' onChange={(e) =>
                    setDescription(e.target.value)
                } value={description} className="bg-slate-300 p-3 w-full mb-2"></textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white'>
                    Guardar
                </button>
            </form>
        </div>

    )
}

export default TaskForm