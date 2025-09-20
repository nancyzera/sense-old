import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '@/services/account';
import { setUser, clearUser } from '@/store/slices/auth';
import { fetchStore, removeStore } from '@/functions';
import { RootState } from '@/store';
import { useEffect } from 'react';

export const useProfile = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const accessToken = fetchStore('accessToken');

  const {
    data: profileData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    enabled: !!accessToken && !isAuthenticated, 
    retry: (failureCount, error: any) => {
      if (error?.response?.status === 401) {
        return false;
      }
      return failureCount < 2;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10, 
  });

  useEffect(() => {
    if (profileData && !isAuthenticated) {
      dispatch(setUser(profileData));
    }
  }, [profileData, isAuthenticated, dispatch]);

  useEffect(() => {
    if (isError && error?.response?.status === 401) {
      dispatch(clearUser());
      removeStore('accessToken');
      removeStore('refreshToken');
    }
  }, [isError, error, dispatch]);

  return {
    user: user || profileData,
    isLoading,
    isAuthenticated: isAuthenticated || !!profileData,
    error,
    isError,
  };
};