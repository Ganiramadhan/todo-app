import React from 'react';

export type Task = {
  id: number | null;
  title: string;
  description: string;
  completed: boolean;
};

type TaskFormProps = {
  formData: Task;
  setFormData: (task: Task) => void;
  onSubmitTask: (e: React.FormEvent) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ formData, setFormData, onSubmitTask }) => {
  return (
    <form onSubmit={onSubmitTask}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <button type="submit">{formData.id ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
