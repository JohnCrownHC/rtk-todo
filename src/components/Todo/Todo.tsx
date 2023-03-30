import { FC } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import classnames from 'classnames';
import { TodoInterface } from '@/store/todosSlice';
import { useCompleteTodoMutation, useDeleteTodoMutation } from '@/api/todos';

export interface TodoProps {
  todo: TodoInterface;
}
export const Todo: FC<TodoProps> = ({ todo }) => {
  const { title, completed, id } = todo;
  const [deleteTodo] = useDeleteTodoMutation();
  const [completeTodo, { isLoading }] = useCompleteTodoMutation();
  const todoStyles = classnames('flex justify-between gap-1 border p-2', {
    'bg-green-600': completed,
    'bg-red-600': !completed,
  });

  return (
    <div className={todoStyles}>
      <div className="text-test">{title}</div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => deleteTodo(id)} className="cursor-pointer">
          <CancelIcon />
        </button>
        <div>
          <input
            type="checkbox"
            checked={completed}
            className="h-5 w-5  cursor-pointer align-middle transition duration-150 ease-in-out focus:outline-none active:bg-gray-50"
            disabled={isLoading}
            onClick={() => completeTodo({ ...todo, completed: !completed })}
          />
        </div>
      </div>
    </div>
  );
};
