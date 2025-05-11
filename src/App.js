import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";


function App() {
    const [logIn, setLogIn] = useState(null)


    function changeStatus(email){
        if (logIn){
            setLogIn(null)
        }else {
            setLogIn(email)
        }
    }

    return (
        <div>
            <h1>Witaj w systemie do zapisow na zajecia </h1>
            {logIn ?  <UserPanel username={logIn} onLogout={changeStatus} /> : <LoginForm onLogin={changeStatus}/> }
        </div>

    )


}

export default App;
