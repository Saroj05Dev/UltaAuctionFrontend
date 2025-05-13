import { useDispatch, useSelector } from "react-redux";
import { fetchAllReports } from "../../redux/slices/adminReportSlice";
import { useEffect } from "react";

function Reports() {
    const dispatch = useDispatch();
    const { reports, loading } = useSelector((state) => state.adminReport);

    useEffect(() => {
    dispatch(fetchAllReports());
    }, [dispatch]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Reported Issues</h2>
      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Reason</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {reports?.map((r) => (
                <tr key={r._id}>
                  <td className="px-4 py-2">{r.userId?.email || "N/A"}</td>
                  <td className="px-4 py-2">{r.reason}</td>
                  <td className="px-4 py-2">{r.description}</td>
                  <td className="px-4 py-2">{new Date(r.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {reports?.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Reports
