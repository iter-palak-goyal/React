import React, { useState } from "react";

const ControlledForm = () => {
    let [student, setStudent] = useState({
        userName: "",
        userEmail: "",
        password: "",
        gender: "",
        skills: []
    })

    function updateTheState(e) {
        const { name, value } = e.target;
        setStudent(prev => ({ ...prev, [name]: value }));
    }

    function handleCheckbox(e) {
        const { value, checked } = e.target;

        if (checked) {
            setStudent(prev => ({ ...prev, skills: [...prev.skills, value] }))
        } else {
            setStudent(prev => ({
                ...prev,
                skills: prev.skills.filter(skill => skill !== value)
            }))
        }
    }

    return (
        <>
            <h1>Student Form</h1>

            <input name="userName" placeholder="Name" onChange={updateTheState} />
            <input name="userEmail" placeholder="Email" onChange={updateTheState} />
            <input type="password" name="password" placeholder="Password" onChange={updateTheState} />

            <h3>Gender</h3>
            <input type="radio" name="gender" value="Male" onChange={updateTheState} /> Male
            <input type="radio" name="gender" value="Female" onChange={updateTheState} /> Female

            <h3>Skills</h3>
            <input type="checkbox" value="HTML" onChange={handleCheckbox} /> HTML
            <input type="checkbox" value="CSS" onChange={handleCheckbox} /> CSS
            <input type="checkbox" value="React" onChange={handleCheckbox} /> React

            <div>
                <h2>Name: {student.userName}</h2>
                <h2>Email: {student.userEmail}</h2>
                <h2>Password: {student.password}</h2>
                <h2>Gender: {student.gender}</h2>
                <h2>Skills: {student.skills.join(", ")}</h2>
            </div>
        </>
    )
}

export default ControlledForm;