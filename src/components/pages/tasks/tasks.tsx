import React, {useState} from "react";
import AddTask from "./add-task";
import TaskItem from "./task-item";
import PageTitle from "../../page-title";
import ContentWrapper from "../../content-wrapper";
import "./tasks.css"

export interface ITask {
    id: number;
    title: string;
    done: boolean;
    important: boolean;
}

export interface ITasks {
    tasks: ITask[];
}

const initialState: ITasks = {
    tasks: [
        {
            id: 1,
            title: 'Купить хлеба',
            done: true,
            important: false,
        },
        {
            id: 2,
            title: 'Купить молока',
            done: false,
            important: true,
        },
        {
            id: 3,
            title: 'Купить гечки',
            done: false,
            important: false,
        },
    ]
}

const Tasks: React.FC = () => {

    const [tasks, setTasks] = useState<ITasks>(initialState);

    const addTask = (title: string) => {
        const tasksList = [...tasks.tasks];
        tasksList.push({
            id: Date.now(),
            title,
            important: false,
            done: false,
        });
        const newTasks = {
            tasks: tasksList
        }
        setTasks(newTasks);
    }

    const toggleImportantTask = (id: number) => {
        const newTasks = [...tasks.tasks];
        newTasks.forEach((task) => {
            if (task.id === id) {
                task.important = !task.important;
            }
        })
        setTasks({
            tasks: newTasks
        });
    }

    const toggleIDoneTask = (id: number) => {
        const newTasks = [...tasks.tasks];
        newTasks.forEach((task) => {
            if (task.id === id) {
                task.done = !task.done;
            }
        })
        setTasks({
            tasks: newTasks
        });
    }

    const deleteTaskItem = (id: number) => {
        const newTasks = [...tasks.tasks];
        const filteredTasks = newTasks.filter((task) => task.id !== id);
        setTasks({tasks: filteredTasks});
    }

    return (
        <ContentWrapper>
            <PageTitle>Мои задачи</PageTitle>
            <AddTask addTask={addTask} />
            <ul className="tasks-list">
                {tasks.tasks.map((task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            task={task}
                            toggleImportant={toggleImportantTask}
                            toggleIDone={toggleIDoneTask}
                            deleteTask={deleteTaskItem}
                        />
                    )
                })}
                {tasks.tasks.length === 0 && <span>Список задач пуст</span>}
            </ul>
        </ContentWrapper>
    )
}

export default Tasks