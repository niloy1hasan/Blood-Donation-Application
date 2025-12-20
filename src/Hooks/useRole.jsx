import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useRole = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { isLoading: roleLoading, data: role = 'donor' } = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}/role`);
            
            return res.data?.role || 'donor';
        }
    })

    return { role, roleLoading };
};

export default useRole;