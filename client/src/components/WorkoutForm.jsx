import React, { useState } from 'react'
import useWorkoutContext from '../hooks/useWorkoutContext';
import useAuthContext from '../hooks/useAuthContext';

const WorkoutForm = () => {

    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const {addWorkout} = useWorkoutContext();
    const {user} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError("You must be logged in.");
            return;
        }

        const workout = {title, load, reps}

        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setTitle("");
            setLoad("");
            setReps("");
            setError(null);
            setEmptyFields([]);
            console.log("new workout added", json);
            addWorkout(json);
        }


    }

    const divStyle = {
        color: 'white'
      };

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3 style = {divStyle}>Add a New Workout</h3>

        <label style = {divStyle}>Exercise Title:</label>
        <input
            type="text"
            onChange={(e) => {setTitle(e.target.value)}}
            value={title} 
            className={emptyFields.includes("title") ? "error" : ""}
        />

        <label style = {divStyle}>Load (in kg):</label>
        <input
            type="number"
            onChange={(e) => {setLoad(e.target.value)}}
            value={load} 
            className={emptyFields.includes("load") ? "error" : ""}
        />

        <label style = {divStyle}>Reps:</label>
        <input
            type="number"
            onChange={(e) => {setReps(e.target.value)}}
            value={reps} 
            className={emptyFields.includes("reps") ? "error" : ""}
        />

        <button type='submit'>Add Workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm