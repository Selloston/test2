'use client'

//import all assets
import Link from "next/link"
import "./Header.css"
import { useState, useRef } from "react"

//The default function
const Header = () => {

    let [inputValue, setinputValue] = useState("");
    let isclickmuneo = false;

    let inputRef = useRef(null)
    let menuRef = useRef(null)

    let Delet = () => {
        if(inputValue !== "")
        {
            setinputValue("");
            inputRef.current.focus();
        }
        else
        {
            inputRef.current.focus();
        }
        FocusEvent
    }

    let clickmenu = () => 
    {
        if(isclickmuneo)
        {
            isclickmuneo =false;
            menuRef.current.className = "menucontanerNone"
        }
        else{
            isclickmuneo =true;
            menuRef.current.className = "menucontanerFlex"
        }
    }

    return (
        <>
            <div className="Header">
                <Link className="logo" href="/">The Logo</Link>
                <div className="SearchBar">
                    <div className="CenterInput">
                        <button onClick={Delet}>x</button>
                        <input ref={inputRef} value={inputValue} onChange={(e) => {setinputValue(e.target.value)}} type="input" className="SearchBox" placeholder="Search..." list="videos" />
                        <datalist id="videos">
                            <option>طريقه مضمونه WeLinkIt كيف تربح من</option>
                            <option>"اغرب حادث حصل بحياتي شاهد قبل الحذف</option>
                            <option>"ليه يا تره الناس غريبه؟</option>
                            <option>"سيره الصحابه عليهم السلام</option>
                            <option>"فديو محظور لا تتدخل لا ينصح للقلوب الضعيفه</option>
                            <option>how to make website with zero code</option>
                            <option>Are You Okey?</option>
                            <option>666 احظر من رقم</option>
                        </datalist>
                    </div>
                    <abbr className="titleSearch" title="Search"><button className="Search">Search</button></abbr>
                </div>
                <Link className="Acconte" href="/Accont"><abbr className="titleAcconte" title="Acconte"></abbr></Link>
                <button className="menu" onClick={clickmenu}>=</button>
            </div>
            <div className="menucontanerNone" ref={menuRef}>
                
            </div>
        </>
    )
}

//expotr the default function
export default Header;