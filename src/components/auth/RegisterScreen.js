import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input type="text" placeholder="Email" name="email" className="auth__input"/>
                <input type="password" placeholder="password" name="password" className="auth__input"/>
                <button type="submit" className="btn btn-primary btn-block" disabled={false}>Login</button>
                
                
                <Link to="/auth/register" className="link">Already Register?</Link>
            </form>
        </>
    )
}
