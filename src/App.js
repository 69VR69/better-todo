import { Todo } from './todo/Todo';
import './todo/Todo.css';

function App() {
  return (

    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>Todo APP</h1>
        </header>
        <Todo />
      </section>
    </div>
  );
}

export default App;
