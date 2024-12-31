import React from 'react';
import './../styles/Modal.css'


interface EditTaskModalProps {
    isOpen: boolean;
    task: Task | null;
    onClose: () => void;
    onSave: (task: Task) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ isOpen, tasks, onClose, onSave }) => {
    const [title, setTitle] = React.useState(tasks ? task.title : '');
    const [status, setStatus] = React.useState(tasks ? task.status : '');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (tasks) {
            onSave({ ...tasks, title, status });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-title">Редактировать задачу</h2>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Название задачи"
                        required
                    />

                        <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option className="form-option" value="Новая">Новая</option>
                            <option className="form-option" value="В работе">В работе</option>
                            <option className="form-option" value="Завершена">Завершена</option>
                        </select>
                        
                    <button type="submit">Сохранить</button>
                    <button type="button" onClick={onClose}>Закрыть</button>
                </form>
            </div>
        </div>
    );
};

export default EditTaskModal;