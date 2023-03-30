import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAddTodoMutation } from '@/api/todos';

export const AddTodoForm: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [addTodo, { isLoading: isAdding }] = useAddTodoMutation();

  const onAddTodo = () => {
    addTodo({ id: uuidv4(), title: todo, completed: false });
    setTodo('');
  };

  return (
    <div className="mb-6 flex items-end gap-3 ">
      <div className="flex flex-col gap-1">
        <label htmlFor="add" className="text-xl">
          Add todo
        </label>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          id="add"
          type="text"
          className="rounded-md border-2 border-gray-300 px-2 py-1 text-black focus:border-blue-600 focus:outline-none"
        />
      </div>
      <button
        onClick={onAddTodo}
        disabled={isAdding || !todo}
        className="rounded-md bg-blue-600 px-4 py-1.5 text-white disabled:opacity-50"
      >
        Add
      </button>
    </div>
  );
};
