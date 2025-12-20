import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';

const instance = axios.create({
    baseURL: 'https://blood-donation-application-server-eight.vercel.app'
})

const useAxiosSecure = () => {
    const { user, logoutUser } = useAuth();
    const navigate = useNavigate();


    useEffect(()=>{

        // request interceptor
        const reqInterceptor = instance.interceptors.request.use((config) => {
        console.log(config);
        config.headers.authorization = `Bearer ${user?.accessToken}`
        return config;
        });
        // response interceptor
        const resInterceptor = instance.interceptors.response.use((response) => {
         return response;
        }, (error) => {
            console.log(error);
            const statusCode = error.status;
            if (statusCode === 401 || statusCode === 403) {
                logoutUser()
                    .then(() => {
                        navigate('/login')
                    })
            }
        });

    return () => {
        instance.interceptors.request.eject(reqInterceptor);
        instance.interceptors.response.eject(resInterceptor);
    }

    }, [user, logoutUser, navigate]);


    return instance;
};

export default useAxiosSecure;