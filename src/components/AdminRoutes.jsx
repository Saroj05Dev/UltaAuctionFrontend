import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function AdminRoutes() {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  console.log("Admin routes:", useSelector((state) => state.auth.role));
  console.log("checking admin", role)

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (role !== 'ADMIN') {
    return <Navigate to="/denied" />
  }

  return <Outlet />;
}

export default AdminRoutes;
