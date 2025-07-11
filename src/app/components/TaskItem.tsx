import React from 'react';
import { Task } from './TaskForm';

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onEdit, onDelete }) => {
  const { id, title, description, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <strong>{title}</strong>
      <p>{description}</p>
      <button onClick={() => id !== null && onToggle(id)}>
        {completed ? 'Undo' : 'Mark Complete'}
      </button>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => id !== null && onDelete(id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
