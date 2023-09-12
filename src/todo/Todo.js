import { useState } from 'react';
import { createNewTask, INITIAL_TASKS } from './task-util';
import './Todo.css';
import NewTodoForm from './dumbs/NewTodoForm';
import ListTodos from './dumbs/ListTodos';

let refresh = 1;

export function Todo() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    console.log('REFRESH', refresh++);

    function onCreateTask(event) {
        if (event.keyCode === 13) {
            // setTasks(tasks => ([...tasks, createNewTask(value)])); // id will inc by 2 ! because of <StrictMode>
            // Solution
            // Avoid side-effect
            // prepare your data BEFORE updating the state
            const newTask = createNewTask(event.target.value);
            event.target.value = '';
            setTasks((tasks) => [...tasks, newTask]);
        }
    }

    return (
        <>
            <NewTodoForm onCreateTask={onCreateTask} />
            <ListTodos tasks={tasks} setTasks={setTasks}/>
        </>
    );
}
