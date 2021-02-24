import React, {useState} from "react";
import "./add-task.css";

interface IAddTaskProps {
    addTask: (task: string) => void;
}

const AddTask: React.FC<IAddTaskProps> = ({addTask}) => {

    const [value, setValue] = useState<string>('');

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        if (value) {
            addTask(value);
            setValue('')
        }
    }

    const onChangeHandler = (event: any) => {
        setValue(event.target.value);
    }

    return (
        <form
            onSubmit={onSubmitHandler}
        >
            <input
                type="text"
                className="input-task-field"
                value={value}
                onChange={onChangeHandler}
            />
            <button
                className="add-btn"
            >
                Добавить
            </button>
        </form>
    )
}

export default AddTask