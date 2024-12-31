import React, { useEffect } from 'react';
import './../styles/Modal.css';
import { Task } from '../types/Task';

interface EditTaskModalProps {
    isOpen: boolean;
    task: Task | null;
    onClose: () => void;
    onSave: (task: Task) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ isOpen, task, onClose, onSave }) => {
    const [title, setTitle] = React.useState<string>('');
    const [status, setStatus] = React.useState<string>('');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setStatus(task.status);
        } 

        if (!task) {
            setTitle('');
            setStatus('');
        }
    }, [task]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (task) {
            onSave({ ...task, title, status });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-content">
                <h2 className="modal-title">Редактировать задачу</h2>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Название задачи"
                        required
                        aria-label="Название задачи"
                    />

                    <select 
                        className="form-select" 
                        value={status} 
                        onChange={(event) => setStatus(event.target.value)} 
                        aria-label="Статус задачи"
                    >
                        <option value="Новая">Новая</option>
                        <option value="В работе">В работе</option>
                        <option value="Завершена">Завершена</option>
                    </select>
                    
                    <button type="submit">Сохранить</button>
                    <button type="button" onClick={onClose}>Закрыть</button>
                </form>
            </div>
        </div>
    );
};

export default EditTaskModal;
