import "./login.css";
import axios from "axios";
import React, {useState} from "react";


export default function Login() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });

    const handleChange = (e) => {
        console.log("Input geändert!", e.target.name, e.target.value);
        console.log("handleChange Aufgerufen!", e.target.name, e.target.value);
        const { name, value} = e.target;
        setFormData((prevformData) => ({
            ...prevformData,
            [name]: value,
        }));
        console.log(name, value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Formulardaten senden: ", formData);
        try {
            const response = await axios.post(
                "http://localhost:8080/api/users/register", 
                formData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log("Erfolgreich registriert:", response.data);
        } catch (error) {
            console.error("Registrierung fehlgeschlagen:", error);
        }
    }
    

   return (
        <div >
            <h1>Hier kannst du dich registrieren</h1>
            <div className="register-container">
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Benutername</label>
            <input type="text" id="username" name="name" onChange={handleChange} required/>

            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" name="email" onChange={handleChange} required/>

            <label htmlFor="password">Passwort</label>
            <input type="password" id="password" name="password" onChange={handleChange} minLength="6" required/>

            <button type="submit">Registration</button>
            </form>
            </div>
        </div>
     );
}