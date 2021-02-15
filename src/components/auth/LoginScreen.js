import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [fields, handledInputChange] = useForm(
        {
            email:'nando@gmail.com',
            password: '123456'
        });
    const {email, password} = fields;

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(email, password);
        dispatch(login(12345, 'rigo'));
    }
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email" className="auth__input" value={email} onChange={handledInputChange}/>
                <input type="password" placeholder="password" name="password" className="auth__input" value={password} onChange={handledInputChange}/>
                <button type="submit" className="btn btn-primary btn-block" disabled={false}>Login</button>
                
                <div className="auth__social-networks">
                    <p>Login with social networks </p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">Create new account</Link>
            </form>
        </>
    )
}
