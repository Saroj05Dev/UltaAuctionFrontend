import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Denied from './pages/auth/Denied'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import AuctionsPage from './pages/AuctionPage'
import BiddingPage from './pages/BiddingPage'
import CreateAuction from './pages/admin/CreateAuction'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ManageAuctions from './pages/admin/ManageAuction'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import UpdateAuction from './pages/admin/UpdateAuction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auctions" element={<AuctionsPage />} />

        {/* ✅ Single auction view */}
        <Route path="/auctions/:auctionId" element={<BiddingPage />} />

        {/** Admin related pages */}
        <Route path="/admin/create-auction" element={<CreateAuction />} />
        <Route path="/admin/update-auction/:auctionId" element={<UpdateAuction />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="auctions" element={<ManageAuctions />} />
          {/* <Route path="users" element={<ManageUsers />} />
          <Route path="reports" element={<Reports />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
