import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiShoppingBag, FiUser, FiMapPin, FiPackage, FiLogOut } from "react-icons/fi";

const ProfileLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth token or user state
    localStorage.removeItem("token"); 
    navigate("/"); // redirect to home after logout
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[280px] flex-shrink-0 bg-gradient-to-br from-[#102362] to-[#140b5b]  p-6 shadow-xl relative overflow-hidden">
        {/* Diagonal slash pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.27) 10px,
              rgba(255, 255, 255, 0.24) 20px
            )`
          }}></div>
        </div>
        
        {/* Decorative circles in background */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-700 rounded-full opacity-80 blur-3xl"></div>
        <div className="absolute bottom-20 left-5 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-600 rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Profile Section */}
        <div className="relative z-10 flex flex-col items-center mb-8 mt-4">
          <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
            <img 
              src="https://img.freepik.com/premium-photo/cartoon-logo-penguin_643934-1347.jpg" 
              alt="Profile" 
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h2 className="text-white text-xl font-bold">Hello User!</h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 relative z-10">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 shadow-md"
          >
            <FiHome className="text-xl" />
            <span className="font-medium">Home</span>
          </NavLink>

          <NavLink
            to="/#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 shadow-md"
          >
            <FiShoppingBag className="text-xl" />
            <span className="font-medium">Orders</span>
          </NavLink>

          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 shadow-md ${
                isActive 
                  ? "bg-blue-500/70 text-white backdrop-blur-sm shadow-lg scale-105" 
                  : "text-white bg-white/20 backdrop-blur-sm hover:bg-white/30"
              }`
            }
          >
            <FiUser className="text-xl" />
            <span className="font-medium">Profile Info</span>
          </NavLink>

          <NavLink
            to="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 shadow-md"
          >
            <FiMapPin className="text-xl" />
            <span className="font-medium">Address</span>
          </NavLink>

          <NavLink
            to="/profile/my-products"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 shadow-md"
          >
            <FiPackage className="text-xl" />
            <span className="font-medium">My Products</span>
          </NavLink>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-white/20 backdrop-blur-sm hover:bg-red-500/40 transition-all duration-300 mt-6 shadow-md border border-white/10"
          >
            <FiLogOut className="text-xl" />
            <span className="font-medium">Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout;