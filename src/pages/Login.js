import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleLogin = event => {
        event.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Eingelogt:' +" "+ user.email +" "+user.uid)
                navigate("/Home")
            })
            .catch(error => alert(error.message))
    }


    const goToSignin = () => {
        navigate("/Signup")
    }


    return (
        <div>
            <p>Login</p>
            <div>
                <form onSubmit={handleLogin}>
                    <div className='Logininput' style={{ marginTop: "5%" }}>
                        <label>E-mail</label>
                        <br />
                        <input type="text" name="email" onChange={e => setEmail(e.target.value)} required />
                        <br />
                        <label>Passwort</label>
                        <br />
                        <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <button
                        type='submit'
                        title='Anmelden'
                        color='white'
                    >Anmelden</button>
                </form>
            </div>
            <button onClick={goToSignin}>Zum Sign Up</button>            
        </div>
    )
}

export default Login