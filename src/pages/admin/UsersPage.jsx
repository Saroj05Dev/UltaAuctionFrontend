// Users.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../redux/slices/adminUserSlice';

function Users() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.adminUser);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">All Users</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-[600px] w-full table-auto text-sm sm:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left whitespace-nowrap">Name</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Email</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Role</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Joined</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  Loading users...
                </td>
              </tr>
            ) : users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="px-4 py-2 break-words">{user.firstName}</td>
                  <td className="px-4 py-2 break-words">{user.email}</td>
                  <td className="px-4 py-2 capitalize">{user.role}</td>
                  <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
