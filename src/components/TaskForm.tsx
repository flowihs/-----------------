import React, { useState } from 'react';
import './../styles/TaskForm.css'

const TaskForm: React.FC<{ onAdd: (task: any) => void }> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Новая');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            status,
            createdAt: new Date().toLocaleDateString(),
        };
        onAdd(newTask);
        setTitle('');
        setStatus('Новая');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-title">5S Задачи</h1>
            <div className="form-up-box">
                <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option className="form-option" value="Новая">Новая</option>
                    <option className="form-option" value="В работе">В работе</option>
                    <option className="form-option" value="Завершена">Завершена</option>
                </select>
                <input className="form-task-input" 
                    type="text"
                    placeholder="Название задачи"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </div>

            <button className="form-add-task-input"  type="submit">Добавить задачу</button>
        </form>
    );
};

export default TaskForm;