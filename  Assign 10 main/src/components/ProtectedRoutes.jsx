
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, allowedRoles, user }) => {
  const location = useLocation();
  
  // Check if the user role is included in the allowed roles
  if (user && allowedRoles.includes(user.type)) {
    return Element; // Return the element if the user has permission
  } else {
    // Redirect to the login page if the user does not have permission
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
