import {useState} from "react";

export default function LoginForm(props) {

    const [email, setEmail] = useState('');

    function handleChange(event) {
        setEmail(event.target.value)
    }


    return <div>

        <label>Zaloguj się e-mailem</label>

        <input type="text" value={email} onChange={handleChange}/>

        <button type="button" onClick={() => props.onLogin(email)}>Wchodzę</button>

    </div>;

}