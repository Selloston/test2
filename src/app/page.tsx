'use client'

import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "@/app/firebase"; // تأكد من أن المسار صحيح
import { Header, Container } from './components/index';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe(); // تنظيف الاشتراك عند فك التركيب
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            // إعادة توجيه إلى الصفحة الرئيسية بعد تسجيل الخروج
            window.location.href = '/';
        }).catch((error) => {
            console.error('Sign out error:', error.message);
        });
    };

    return (
        <>
            <Header user={user} onLogout={handleLogout} />
            <Container />
        </>
    );
}

export default App;
