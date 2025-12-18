import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Context/AuthContext';

const useRole = () => {
    const { user } = use(AuthContext);
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