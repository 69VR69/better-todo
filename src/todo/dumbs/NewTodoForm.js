
let refresh = 0;
export default function NewTodoForm({ onCreateTask }) {

    console.log('REFRESH NewTodoForm', refresh++);

    return (

        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                className="new-todo"
                placeholder="Ajouter une tâche"
                autoComplete="off"
                autoFocus={true}
                onKeyDown={onCreateTask}
            />
        </form>
    );
}