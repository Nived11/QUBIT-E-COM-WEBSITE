import { Eye, EyeOff } from 'lucide-react';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaLock,
  FaFileAlt,
  FaShoppingBag,
  FaStore,
} from 'react-icons/fa';
import logo from '../../../../assets/Qubit.webp';
import loginbg from '../../../../assets/loginbg.png';
import { useSignup } from '../hooks/useSignup';
import OTPModal from './OTPModal';

const SignupForm = () => {
  const {
    accountType,
    setAccountType,
    formData,
    handleChange,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    loading,
    handleSubmit,
    handleSignIn,
    otpEmail,
    setOtpEmail,
  } = useSignup();

  return (
    <>
    <div className="lg:h-screen sm:min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Section */}
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
              d="M0 0 C20 30, 40 40, 15 80 C-5 110, 25 160, 25 180 C-10 220, 32 250, 5 290 C-14 330, 35 390, 8 400 C-18 460, 45 470, 10 520 C-12 550, 32 600, 6 620 C-16 660, 38 690, 10 730 C-14 770, 35 870, 10 840 C-10 880, 30 900, 5 950 C-8 980, 20 995, 0 1000 L100 1000 L100 0 Z"
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
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 lg:mt-6">
              Qubitx
            </h2>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-4 lg:py-4 bg-white">
        <div className="w-full max-w-xl lg:overflow-y-auto lg:max-h-screen py-8 px-2 bg-white scrollbar-hide">
          <div className="mb-4 lg:mb-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-1">
              Create Account
            </h1>
            <p className="text-sm sm:text-base text-blue-900">
              Sign up to get started
            </p>
          </div>

          <div className="space-y-3 lg:space-y-3.5">
            {/* Account Type */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-blue-900 mb-2">
                Account Type
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setAccountType('buyer')}
                  className={`flex-1 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${
                    accountType === 'buyer'
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'bg-gray-300 text-blue-900 hover:bg-gray-400 hover:text-white'
                  }`}
                >
                  <FaShoppingBag /> Buyer
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('seller')}
                  className={`flex-1 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${
                    accountType === 'seller'
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'bg-gray-300 text-blue-900 hover:bg-gray-400 hover:text-white'
                  }`}
                >
                  <FaStore /> Seller
                </button>
              </div>
            </div>

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
              />
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Seller Fields */}
            {accountType === 'seller' && (
              <>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                  />
                </div>
                <div className="relative">
                  <FaFileAlt className="absolute left-3 top-3 text-blue-900" />
                  <input
                    type="file"
                    name="proofDocument"
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </>
            )}

            {/* Terms */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-blue-800 border-gray-400 rounded focus:ring-blue-800 cursor-pointer"
              />
              <label className="text-xs sm:text-sm text-gray-800">
                I agree to the{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Terms and Conditions
                </button>
              </label>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 sm:py-3 rounded-full transition-colors shadow-sm text-sm sm:text-base mt-2 flex justify-center items-center ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending OTP...' : 'Register'}
            </button>

            {/* Sign In */}
            <p className="text-center text-sm sm:text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <button
                onClick={handleSignIn}
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    {otpEmail && (
  <OTPModal
    email={otpEmail}
    purpose="signup"
    onVerified={() => setOtpEmail(null)}
    onClose={() => setOtpEmail(null)}
  />
)}
</>
  );
};

export default SignupForm;
