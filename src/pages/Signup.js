import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from "react-router-dom";

const Signup = () => {



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

 
    const handleSignUp = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log('Eingelogt:' + " " + user.email + " " + user.uid)
                navigate("/Home")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }


    const goToLogIn = () => {
        navigate("/")
    }



    return (
        <div className='wrapper'>
        <div className='SignUp'>
            <p>Sign Up</p>
            <div>
                <form onSubmit={handleSignUp}>
                    <div className='SignUpInput' style={{ marginTop: "5%" }}>
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
                    >Registrieren</button>
                </form>
            </div>
            <br/>
            <button onClick={goToLogIn}>Zum LogIn</button>            
        </div>
        </div>
    )
}

export default Signup