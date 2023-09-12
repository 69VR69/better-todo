import ActionFilterButton from "../ActionFilterButton";
import OneTodo from "./OneTodo";
import { useState } from "react";

export default function ListTodos({ tasks, setTasks }) {


    // Derived State (sub state from state)
    // do not put derived state in the state !
    const remainingTasks = tasks.filter((t) => !t.completed).length;
    const [filter, setFilter] = useState('ALL'); // ['ALL', 'ACTIVE', 'COMPLETED']


    function onComplete(task) {
        setTasks((tasks) =>
            tasks.map((t) => (t.id === task.id ? { ...task, completed: !task.completed } : t)));
    }

    function onDestroy(task) {
        setTasks(tasks => tasks.filter((t) => t.id !== task.id));
    }

    function onToggle(checked) {
        setTasks(prevTasks => {
            const newTasks = prevTasks.map((t) => {
                if (t.completed === checked) {
                    return t;
                } else {
                    return { ...t, completed: checked };
                }
            });
            return newTasks;
        });
    }

    function showAll(e) {
        setFilter('ALL');
    }

    function showActive(e) {
        setFilter('ACTIVE');
    }

    function showCompleted(e) {
        setFilter('COMPLETED');
    }

    function filterFunction(task) {
        switch (filter) {
            case 'ALL': return true;
            case 'ACTIVE': return !task.completed;
            case 'COMPLETED': return task.completed;
            default: return true;
        }
    }

    function getClass(filterName) {
        return filter === filterName ? 'selected' : '';
    }

    return (
        <>

            <section className="main">
                <input
                    type="checkbox"
                    id="toggle-all"
                    className="toggle-all"
                    onClick={(e) => onToggle(e.target.checked)}
                />
                <label htmlFor="toggle-all">Tâches finies</label>
                <ul className="todo-list">
                    {tasks
                        .filter(task => (filterFunction(task)))
                        .map((task) => (
                            <OneTodo key={task.id} task={task} onComplete={onComplete} onDestroy={onDestroy} />
                        ))}
                </ul>
            </section>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{remainingTasks} tâches restantes</strong>
                </span>
                <ul className="filters">
                    <li>
                        <ActionFilterButton className={getClass("ALL")} action={showAll}>ALL</ActionFilterButton >
                    </li>
                    <li>
                        <ActionFilterButton className={getClass("ACTIVE")} action={showActive}>ACTIVE</ActionFilterButton >
                    </li>
                    <li>
                        <ActionFilterButton className={getClass("COMPLETED")} action={showCompleted}>COMPLETED</ActionFilterButton >
                    </li>
                </ul>

            </footer>
        </>
    );
}