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
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-t">
                <td className="px-4 py-2">{user.firstName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 capitalize">{user.role}</td>
                <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
