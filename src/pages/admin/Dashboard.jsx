import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../redux/slices/adminSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const { loading, dashboardData } = useSelector((state) => state.admin);
  console.log("dashboard data", dashboardData);
  
  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);
    return (
        <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome Admin</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: dashboardData?.data?.totalUsers },
          { label: 'Active Auctions', value: dashboardData?.data?.activeAuctions },
          { label: 'Completed Auctions', value: dashboardData?.data?.completedAuctions },
          { label: 'Reports Today', value: dashboardData?.data?.todayReports }
        ].map((item, index) => (
          <div key={index} className="p-4 bg-white rounded shadow">
            <h3 className="text-sm text-gray-500">{item.label}</h3>
            <p className="text-2xl font-bold">
              {loading ? 'Loading...' : item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;
