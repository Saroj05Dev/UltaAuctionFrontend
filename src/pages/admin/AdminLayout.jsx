import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';


function AdminLayout() {
    return (
        <div className="flex h-screen bg-gray-100">
          <AdminSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <AdminTopbar />
            <main className="flex-1 overflow-y-auto p-4">
              <Outlet /> {/* This renders nested routes like Dashboard, ManageAuctions, etc */}
            </main>
          </div>
        </div>
      );
}

export default AdminLayout
