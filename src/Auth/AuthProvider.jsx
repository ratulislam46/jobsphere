import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.config'
import axios from 'axios';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const Register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser);
            if (currentUser?.email) {
                const userData = { email: currentUser.email };
                axios.post('http://localhost:3000/jwt', userData, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const LogOut = () => {
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
    }


    const authInfo = {
        Register,
        SignIn,
        user,
        setUser,
        LogOut,
        loading,
        signInWithGoogle
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;