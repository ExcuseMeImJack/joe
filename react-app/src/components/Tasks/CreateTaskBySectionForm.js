import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskBySectionId } from '../../store/tasks';
import './CreateTaskBySectionForm.css'

function CreateTaskBySectionForm({sectionId, setCreateButton}){
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        let hasErrors = false;
        if (!taskName) {
            setErrors(error => ({...errors, taskName: "Task Name Required"}))
            hasErrors = true;
        }
        // if (!dueDate) {
        //     setErrors(errors => ({...errors, dueDate: "Due Date Required!"}))
        //     hasErrors = true;
        // }
        if (!description) {
            setErrors(errors => ({...errors, description: "Description Required!"}))
            hasErrors = true;
        }

        const data = await dispatch(addTaskBySectionId({
            name: taskName,
            due_date: dueDate,
            description: description
        }, sectionId))
        console.log(data)
        if (data.status === 401) {
            console.log("WORKING!!!!?")
            setErrors(errors => ({...errors, dueDate: "Due Date Required!"}))
            hasErrors = true;
            return;
        }
        setCreateButton(true)
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                    <div className="error-container">
                    {errors.taskName && <p>{errors.taskName}</p>}
                    </div>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <div className="error-container">
                    {errors.dueDate && <p>{errors.dueDate}</p>}
                    </div>
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="error-container">
                    {errors.description && <p>{errors.description}</p>}
                    </div>
                    <button type="submit" className="submit-create">Create Task</button>
                </form>
            </div>
    );
}

export default CreateTaskBySectionForm;
