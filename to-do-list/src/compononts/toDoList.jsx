import React, { useState } from "react";


const ToDOList = () => {
    const [tasks, setTasks] = useState(["By Groceries", "learn react"])
    const [task, setTask] = useState("")

    const AddTasks = (e) => {
        e.preventDefault();
        if(!task.trim()) return;
        setTasks([...tasks, task]);
        setTask("")
    }

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    
    return (
        <div>
            <h1>To do list</h1>
            <form onSubmit={AddTasks}>
                <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} placeholder="Enter the task" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task} <button  onClick={() => removeTask(index)}>Delete</button></li>
                ))}
            </ul>

        </div>
    )
}

export default ToDOList;