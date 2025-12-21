import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from './AuthContext';
import useAxios from '../Hooks/useAxios';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const axiosInstance = useAxios();
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

    const addUserOnDb = async(newUser) => {
    const url = '/users';

    try {
        const res = await axiosInstance.post(url, newUser);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
    };


        const isUserExist = (email) => {
            const url = `/users/${email}`;
            return axiosInstance.get(url);
        }

        const getDBUser = async(email) => {
              const token = await auth.currentUser.getIdToken();
              console.log(token);
            try {
                const res = await axiosInstance.get(`/users/${email}`, {
                    headers: {
                        authorization : `Bearer ${token}`
                    }
                });
                return res.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
            try {
                const dbUser = await getDBUser(currentUser.email);
                setUser({ ...currentUser, ...dbUser });
            } catch (error) {
                console.error(error);
                setUser(currentUser);
            }
            } else {
            setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
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