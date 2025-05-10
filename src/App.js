import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [logIn, setLogIn] = useState(false)

    function handleChange(event) {
        setEmail(event.target.value)
    }

    function changeStatus(){
        if (logIn){
            setLogIn(false)
            setEmail('')
        }else {
            setLogIn(true)
        }

    }

    if (!logIn) {
        return  (
            <div>
                <h1>Witaj w systemie do zapisow na zajecia </h1>
                <div>
                    <h2>Zaloguj sie e-mailem </h2>
                    <input type="text"  value={email} onChange={handleChange}/>
                    <button type="button"  onClick={changeStatus}>Wchodze</button>
                </div>
            </div>
        )
    } else {
      return (
          <div>
              <h2> Witaj  {email} !</h2>
              <button type="button" onClick={changeStatus}>Wyloguj</button>

          </div>
      )
    }


}

export default App;
