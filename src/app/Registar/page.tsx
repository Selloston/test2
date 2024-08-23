'use client'

//import all assets
import Link from 'next/link'
import './Registar.css'

//The default function
const page = () => {
    return (
        <>
            <div className="bodyRegistar">
                <div className="contaner">
                    <h1>Registar</h1>
                    <div className="contanerinput">
                        <div className="contaneremailregistar">
                            <h3>Email</h3>
                            <input className='emailRegistar' type="email" />
                        </div>
                        <div className="contanerpasswordregistar">
                            <h3>Password</h3>
                            <input className='passwordRegistar' type="password" />
                        </div>
                        <div className="contanerpasswordconfarm">
                            <h3>ConfarmPassword</h3>
                            <input className='passwordconfarm' type="password" />
                        </div>
                        <input className='Registar' type="submit" value="Registar" />
                    </div>
                    <p>Do you have acconte? <span><Link className='Link' href="/Login">Login</Link></span></p>
                </div>
            </div>
        </>
    )
}

//expotr the default function
export default page