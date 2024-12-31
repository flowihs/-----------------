import React, { useState } from 'react';
import Header from './components/Header.tsx';
import TaskList from './components/TaskList.tsx';
import TaskForm from './components/TaskForm.tsx';
import ContactForm from './components/ContactForm.tsx';
import './styles/App.css';
import Home from './components/Home.tsx';

interface Task {
    id: number;
    title: string;
    status: string;
    createdAt: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const addTask = (task: Task) => {
        const updatedTasks = [...tasks, task];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleDelete = (id: number) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleEdit = (updatedTask: Task) => {
        const updatedTasks = tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <>
            <Header />
            <div className="MainBox">
                <Home />
                <div id="tasks">
                    <TaskForm onAdd={addTask} />
                    <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
                </div>
                <div id="contacts">
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default App;