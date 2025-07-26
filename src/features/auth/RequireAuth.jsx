import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {

    /**This component will check if the user is authenticated
    If not, redirect to the login page
    If authenticated, allow access to the requested page */
    const { isLoggedIn } = useSelector((state) => state.auth);

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default RequireAuth
