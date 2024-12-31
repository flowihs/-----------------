import React, { useState } from 'react';
import EditTaskModal from './EditTaskModal.tsx';
import './../styles/TaskList.css'
import './../styles/utilits.css'
import './../styles/App.css'

interface Task {
    id: number;
    title: string;
    status: string;
    createdAt: string;
}

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onEdit: (task: Task) => void; 
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState<Task | null>(null);

    const handleEdit = (task: Task) => {
        setCurrentTask(task);
        setModalOpen(true);
    };

    const handleSave = (updatedTask: Task) => {
        onEdit(updatedTask);
        setModalOpen(false);
        setCurrentTask(null);
    };

    return (
        <div className="task-list-main-box">
            <table className="task-list-table">
                <thead>
                    <tr className="task-list-first-td-box">
                        <th className="task-list-first-td">ID</th>
                        <th className="task-list-first-td">Название задачи</th>
                        <th className="task-list-first-td">Статус</th>
                        <th className="task-list-first-td">Дата создания</th>
                        <th className="task-list-first-td">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td  className="task-list-td-id">{task.id}</td>
                            <td className="task-list-td-title">{task.title}</td>
                            <td className={`task-list-td-status 
                                ${task.status === 'Новая' ? 'green' : ''}
                                ${task.status === 'В работе' ? 'yellow' : ''}
                                ${task.status === 'Завершена' ? 'red' : ''}
                            `}>{task.status}</td>
                            <td>{task.createdAt}</td>
                            <td className="task-list-td-button-box">
                                <button
                                    className="task-list-td-delete-button"
                                    onClick={() => onDelete(task.id)}
                                >
                                    Удалить
                                </button>
                                <button
                                    className="task-list-td-edit-button"
                                    onClick={() => handleEdit(task)} 
                                >
                                    Редактировать
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditTaskModal
                isOpen={isModalOpen}
                task={currentTask}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
};

export default TaskList;