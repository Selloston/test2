'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { auth } from '@/app/firebase'; // تأكد من المسار الصحيح
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import './Header.css';

const Header: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleDelet = () => {
        if (inputValue !== '') {
            setInputValue('');
            inputRef.current?.focus();
        } else {
            inputRef.current?.focus();
        }
    };

    const handleClickMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Sign out error:', (error as Error).message);
        }
    };

    return (
        <>
            <div className="Header">
                <Link className="logo" href="/">The Logo</Link>
                <div className="SearchBar">
                    <div className="CenterInput">
                        <button onClick={handleDelet}>x</button>
                        <input
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            type="input"
                            className="SearchBox"
                            placeholder="Search..."
                            list="videos"
                        />
                        <datalist id="videos">
                            <option>طريقه مضمونه WeLinkIt كيف تربح من</option>
                            <option>اغرب حادث حصل بحياتي شاهد قبل الحذف</option>
                            <option>ليه يا تره الناس غريبه؟</option>
                            <option>سيره الصحابه عليهم السلام</option>
                            <option>فديو محظور لا تتدخل لا ينصح للقلوب الضعيفه</option>
                            <option>how to make website with zero code</option>
                            <option>Are You Okey?</option>
                            <option>666 احظر من رقم</option>
                        </datalist>
                    </div>
                    <abbr className="titleSearch" title="Search">
                        <button className="Search">Search</button>
                    </abbr>
                </div>
                {user ? (
                    <div className="profile-section">
                        <Link href="/profile">
                            <img
                                src={user.photoURL || '/default-profile.png'}
                                alt="Profile"
                                className="profile-image"
                            />
                        </Link>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </div>
                ) : (
                    <Link className="Link" href="/Login">
                        Login
                    </Link>
                )}
                <button className="menu" onClick={handleClickMenu}>=</button>
            </div>
            <div className={isMenuOpen ? "menucontanerFlex" : "menucontanerNone"} ref={menuRef}>
                {/* محتوى القائمة هنا */}
            </div>
        </>
    );
};

export default Header;