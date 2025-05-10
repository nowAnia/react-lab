import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('anow@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value)
    }

    let message;
    if (email.length < 5) {
        message = 'Twoj email jest za krotki'
    } else if ( email.length === 5) {
        message = 'Twoj email jest idealny!'
    } else {
        message = 'Twoj email jest za dlugi!'
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <h3>{message}</h3>
            <input type="text"  value={email} onChange={handleChange}/>
        </div>
    );
}

export default App;
