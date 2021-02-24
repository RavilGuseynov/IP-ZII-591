import React from "react";
import "./task-item.css"
import {ITask} from "../tasks";

interface ITaskItemProps {
    task: ITask;
    toggleImportant: (id: number) => void;
    toggleIDone: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TaskItem: React.FC<ITaskItemProps> = ({task, toggleImportant, toggleIDone, deleteTask}) => {

    const getClassNames = () => {
        let className = 'item-text';
        if (task.done) {
            className += ' text-item-done';
        }
        if (task.important) {
            className += ' text-item-bold'
        }

        return className;
    }

    const importantToggleHandler = () => {
        toggleImportant(task.id)
    }

    const toggleIDoneHandler = () => {
        toggleIDone(task.id)
    }

    const deleteTaskHandler = () => {
        deleteTask(task.id);
    }

    return (
        <li className="tasks-list-item">
            <button
                className="item-btn item-btn-important"
                onClick={importantToggleHandler}
            >
                !
            </button>
            <button
                className="item-btn item-btn-delete"
                onClick={deleteTaskHandler}
            >
                &#10006;
            </button>
            <span
                className={getClassNames()}
                onClick={toggleIDoneHandler}
            >
                {task.title}
            </span>
        </li>
    )
}

export default TaskItem