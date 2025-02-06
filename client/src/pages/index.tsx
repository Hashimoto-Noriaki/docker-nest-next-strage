import { FormEvent, useState, useEffect } from 'react';

// Todo の型定義
interface Todo {
  id: number;
  title: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  // バックエンドから Todo を取得
  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then((data: Todo[]) => setTodos(data))
      .catch(err => console.error(err));
  }, []);

  // Todo の追加処理
  const addTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    const newTodo: Todo = await res.json();
    setTodos([...todos, newTodo]);
    setTitle('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => {
              // 削除処理（必要に応じて実装）
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
