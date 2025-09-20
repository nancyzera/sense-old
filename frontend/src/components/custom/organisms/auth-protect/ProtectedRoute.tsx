// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { RootState } from "@/store";

// interface Props {
//   children: React.ReactNode;
// }

// const ProtectedRoute = ({ children }: Props) => {
//   const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

//   if (loading) {
//     return <div>Loading...</div>; 
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/signin" replace />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { fetchStore } from '@/functions';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  const accessToken = fetchStore('accessToken');
  const refreshToken = fetchStore('refreshToken');
  
  const hasValidAuth = isAuthenticated || (accessToken && refreshToken);
  
  if (!hasValidAuth) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;