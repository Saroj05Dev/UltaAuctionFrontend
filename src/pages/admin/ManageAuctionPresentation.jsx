// ManageAuctionsPresentation.jsx
import React from "react";

const ManageAuctionsPresentation = ({
  auctions,
  loading,
  handleCreate,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Manage Auctions</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create New Auction
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Auction ID</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Total Bids</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  Loading auctions...
                </td>
              </tr>
            ) : auctions.length > 0 ? (
              auctions.map((auction) => (
                <tr key={auction._id} className="border-t">
                  <td className="px-4 py-2">{auction._id}</td>
                  <td className="px-4 py-2">{auction.title}</td>
                  <td className="px-4 py-2 capitalize">{auction.status}</td>
                  <td className="px-4 py-2">{auction.bids?.length || 0}</td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(auction._id)}
                      className="px-3 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(auction._id)}
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No auctions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAuctionsPresentation;
