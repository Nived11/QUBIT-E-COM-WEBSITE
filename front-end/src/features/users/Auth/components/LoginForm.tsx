import logo from "../../../../assets/Qubit.webp";
import loginbg from "../../../../assets/loginbg.png";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  const {
    formData,
    showPassword,
    loading,
    handleChange,
    handleSubmit,
    handleSignUp,
    setShowPassword,
  } = useLogin();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Side - Blue Section */}
      <div className="lg:w-1/2 relative flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 lg:min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100  brightness-100 hue-rotate-[18deg]"
          style={{ backgroundImage: `url(${loginbg})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 z-20">
          <svg
            className="absolute right-0 h-full w-24"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0 
                 C20 30, 40 40, 15 80
                 C-5 110, 25 160, 25 180
                 C-10 220, 32 250, 5 290
                 C-14 330, 35 390, 8 400
                 C-18 460, 45 470, 10 520
                 C-12 550, 32 600, 6 620
                 C-16 660, 38 690, 10 730
                 C-14 770, 35 870, 10 840
                 C-10 880, 30 900, 5 950
                 C-8 980, 20 995, 0 1000
                 L100 1000 L100 0 Z"
              fill="white"
              filter="drop-shadow(-2px 0 4px rgba(0,0,0,0.1))"
            />
          </svg>
        </div>

        <div className="text-center text-white z-10 max-w-md relative">
          <div className="mb-6 lg:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full mx-auto flex items-center justify-center shadow-xl border-1 border-blue-700">
              <img src={logo} alt="logo" className="invert brightness-0" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 lg:mt-6">Qubitx</h2>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Welcome to Qubitx</h3>
            <p className="text-blue-100 text-sm lg:text-base leading-relaxed">
              Enter your personal details and start your journey with us. We're excited to have you on board!
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-6 lg:mb-8 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-2">Welcome Back!</h1>
            <p className="text-sm sm:text-base text-blue-900">Login to continue</p>
          </div>

          <div className="space-y-4 lg:space-y-5">
            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-blue-900" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 sm:pl-10 sm:pr-4 py-2.5 sm:py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3.5 text-blue-900" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 sm:pl-10 sm:pr-10 py-2.5 sm:py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-blue-900"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-end text-xs sm:text-sm">
              <button
              
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button with Loading */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 sm:py-3 rounded-full transition-colors shadow-sm text-sm sm:text-base flex items-center justify-center ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            <p className="text-center text-sm sm:text-sm text-gray-600 mt-5 lg:mt-6">
              Don't have an account?{" "}
              <button
                onClick={handleSignUp}
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LoginForm;
