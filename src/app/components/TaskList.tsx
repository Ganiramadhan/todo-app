import React from 'react';
import TaskItem from './TaskItem';
import { Task } from './TaskForm';

type TaskListProps = {
  tasks: Task[];
  filter: 'completed' | 'incomplete';
  onToggle: (id: number) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, filter, onToggle, onEdit, onDelete }) => {
  const filteredTasks = tasks.filter((task) =>
    filter === 'completed' ? task.completed : !task.completed
  );

  return (
    <>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id ?? Math.random()} 
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default TaskList;
