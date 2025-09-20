// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { RootState } from "@/store";

// interface Props {
//   children: React.ReactNode;
// }

// const AuthRoute = ({ children }: Props) => {
//   const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);
  
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (isAuthenticated) {
//     return <Navigate to="/app" replace />;
//   }

//   return <>{children}</>;
// };

// export default AuthRoute;


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { fetchStore } from '@/functions';

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const location = useLocation();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  const accessToken = fetchStore('accessToken');
  const refreshToken = fetchStore('refreshToken');
  
  const hasValidAuth = isAuthenticated || (accessToken && refreshToken);
  
  if (hasValidAuth) {
    const from = location.state?.from?.pathname || '/app';
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
};

export default AuthRoute;