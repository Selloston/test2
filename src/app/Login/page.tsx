'use client'

//import all assets
import Link from 'next/link'
import './page.css'

//The default function
const Login = () => {
    return (
        <>
            <div className="body">
                <div className="contaner">
                    <h1>Login</h1>
                    <div className="contanerinput">
                        <div className="contaneremail">
                            <h3>Email</h3>
                            <input className='email' type="email" />
                        </div>
                        <div className="contanerpassword">
                            <h3>Password</h3>
                            <input className='password' type="password" />
                        </div>
                        <input className='Login' type="submit" value="Login" />
                    </div>
                    <p>Dont have acconte? <span><Link className='Link' href="/Registar">Create Acconte</Link></span></p>
                </div>
            </div>
        </>
    )
}

//expotr the default function
export default Login