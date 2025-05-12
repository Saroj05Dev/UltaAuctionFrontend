import React from 'react'

function AdminTopbar() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <h1 className="text-xl font-semibold text-gray-700">Admin Panel</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Admin</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </header>
      );
}

export default AdminTopbar
