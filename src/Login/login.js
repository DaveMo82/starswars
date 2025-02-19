import "./login.css";

export default function login() {

    return (
        <div >
            <h1>Hier kannst du dich registrieren</h1>
            <div className="register-container">
            <form action={"/submit"} method="POST">
            <label htmlFor="username">Benutername</label>
            <input type="text" id="username" name="username" required/>

            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" name="email" required/>

            <label htmlFor="password">Passwort</label>
            <input type="password" id="password" name="password" minlength="6" required/>

            <button type="submit">Registration</button>
            </form>
            </div>
        </div>
    )
}