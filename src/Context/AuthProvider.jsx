import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      }
    
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const addUserOnDb = (newUser) => {
    const url = 'http://localhost:3000/users';

    try {
        const res = axios.post(url, newUser);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
    };


        const isUserExist = (email) => {
            const url = `http://localhost:3000/users/${encodeURIComponent(email)}`;
            return axios.get(url);
        }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        loginUser,
        googleSignIn,
        logoutUser,
        updateUserProfile,
        addUserOnDb,
        isUserExist
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;