import { useState, useEffect } from "react";
import {
  Package,
  Clock,
  CheckCircle,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  //
  const token = localStorage.getItem("adminToken");

  const fetchRequests = async () => {
    try {
     const res = await fetch("https://scrap-collection-website.onrender.com/api/all-requests", {
        headers: {
          // 🔴
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok && Array.isArray(data)) {
        setRequests(data);
      } else {
        console.error("Auth Error or Invalid Data:", data);
        setRequests([]);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/update-status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        
          Authorization: `Bearer ${token}`, // 🔴 YAHAN BHI FIX KIYA
        },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchRequests();
    } catch (err) {
      console.error("Error updating:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  const safeRequests = Array.isArray(requests) ? requests : [];

  const totalRequests = safeRequests.length;
  const pendingRequests = safeRequests.filter(
    (req) => req?.status === "pending",
  ).length;
  const completedRequests = safeRequests.filter(
    (req) => req?.status === "approved",
  ).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1830] flex items-center justify-center text-green-500 font-bold tracking-widest uppercase">
        Loading Portal...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1830] flex flex-col md:flex-row font-sans">
      {/* SIDEBAR */}
      <div className="w-full md:w-64 bg-slate-900 border-r border-slate-800 flex md:flex-col">
        <div className="h-10 flex items-center px-6 border-b border-slate-800">
          <h2 className="text-[12px] font-black text-green-500 uppercase tracking-widest">
            Admin Panel
          </h2>
        </div>
        <div className="flex-1 py-6 px-4">
          <button className="w-full flex items-center gap-3 bg-green-500/10 text-green-500 px-4 py-2.5 rounded-lg text-[12px] font-bold">
            <LayoutDashboard size={16} /> Dashboard
          </button>
        </div>
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 text-slate-400 hover:text-red-500 px-4 py-2 rounded-lg text-[12px] font-bold transition-colors"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* COMPACT HEADER */}
        <header className="h-10 flex items-center justify-between px-6 bg-slate-900/50 border-b border-slate-800">
          <h1 className="text-[12px] font-bold text-slate-300 uppercase tracking-wider">
            Overview
          </h1>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {/* STATS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 text-blue-500 rounded-lg">
                <Package size={24} />
              </div>
              <div>
                <p className="text-[12px] text-slate-400 font-bold uppercase tracking-wider">
                  Total Pickups
                </p>
                <h3 className="text-2xl font-black text-white">
                  {totalRequests}
                </h3>
              </div>
            </div>
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 text-yellow-500 rounded-lg">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-[12px] text-slate-400 font-bold uppercase tracking-wider">
                  Pending
                </p>
                <h3 className="text-2xl font-black text-white">
                  {pendingRequests}
                </h3>
              </div>
            </div>
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-green-500/20 text-green-500 rounded-lg">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-[12px] text-slate-400 font-bold uppercase tracking-wider">
                  Approved
                </p>
                <h3 className="text-2xl font-black text-white">
                  {completedRequests}
                </h3>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-xl overflow-x-auto">
            <table className="min-w-[700px] w-full text-left text-slate-300">
              <thead className="bg-slate-800 text-[12px] uppercase font-black text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="p-4">User</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Weight</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {safeRequests.length > 0 ? (
                  safeRequests.map((req) => (
                    <tr
                      key={req._id}
                      className="border-t border-slate-800 hover:bg-slate-800/50"
                    >
                      <td className="p-4 text-white font-medium">
                        {req.userId?.name || "Unknown"}
                      </td>
                      <td className="p-4">{req.scrapType}</td>
                      <td className="p-4 text-green-400 font-bold">
                        {req.weight} KG
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1.5 rounded-md text-[10px] font-black uppercase bg-slate-800">
                          {req.status}
                        </span>
                      </td>
                      <td className="p-4 flex gap-2 justify-center">
                        <button
                          onClick={() => updateStatus(req._id, "approved")}
                          className="bg-green-500/20 hover:bg-green-500 hover:text-white text-green-500 px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-all"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateStatus(req._id, "rejected")}
                          className="bg-red-500/20 hover:bg-red-500 hover:text-white text-red-500 px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-all"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-slate-500">
                      No requests found or unauthorized access.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
