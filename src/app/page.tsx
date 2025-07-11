'use client';

import React, { useState, useEffect } from 'react';
import TaskForm, { Task } from './components/TaskForm';
import TaskList from './components/TaskList';
import './globals.css';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [formData, setFormData] = useState<Task>(initialFormState());

  // Initialize form data
  function initialFormState(): Task {
    return {
      id: null,
      title: '',
      description: '',
      completed: false,
    };
  }

  // Fetch initial tasks
  useEffect(() => {
    fetchInitialTasks();
  }, []);

  const fetchInitialTasks = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Array<{ id: number; title: string; completed: boolean }> = await response.json();

      const formattedTasks: Task[] = data.slice(0, 10).map((item) => ({
        id: item.id,
        title: item.title,
        description: 'No description',
        completed: item.completed,
      }));

      setTasks(formattedTasks);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) return alert('Title cannot be empty.');
    if (!formData.description.trim()) return alert('Description cannot be empty.');

    formData.id ? updateTask(formData) : addTask(formData);
    setFormData(initialFormState());
  };

  const addTask = (task: Task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (task: Task) => {
    setFormData(task);
  };

  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm
        formData={formData}
        setFormData={setFormData}
        onSubmitTask={handleSubmit}
      />

      <h2>Incomplete Tasks</h2>
      <TaskList
        tasks={tasks}
        filter="incomplete"
        onToggle={toggleCompletion}
        onEdit={editTask}
        onDelete={deleteTask}
      />

      <h2>Completed Tasks</h2>
      <TaskList
        tasks={tasks}
        filter="completed"
        onToggle={toggleCompletion}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </div>
  );
}
