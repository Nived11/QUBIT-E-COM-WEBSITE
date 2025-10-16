import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import api from "../../../../api/axios";

interface OTPModalProps {
  email: string;
  purpose: "signup" | "forgot-password";
  onClose: () => void;
  onVerified: () => void;
}

const OTPModal = ({ email, purpose, onClose, onVerified }: OTPModalProps) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [resendAllowed, setResendAllowed] = useState(false);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Countdown timer
  useEffect(() => {
    if (timer <= 0) {
      setResendAllowed(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join("");
    if (otpCode.length < 6) return toast.error("Enter 6-digit OTP");

    try {
      setLoading(true);
      await api.post("/otp/verify-otp", { email, otp: otpCode, purpose });
      toast.success("OTP verified successfully!");
      onVerified();
      onClose();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to verify OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setLoading(true);
      await api.post("/otp/generate-otp", { email, purpose });
      toast.success("OTP resent to email!");
      setTimer(60);
      setResendAllowed(false);
      setOtp(Array(6).fill(""));
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-100 sm:w-96 text-center">
        <h2 className="text-lg font-semibold mb-2">Enter OTP</h2>
        <p className="text-sm mb-4">
          We've sent an OTP to <span className="font-semibold">{email}</span>
        </p>

        <div className="flex justify-between gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => { inputRefs.current[index] = el; }}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-12 text-center border border-gray-400 rounded-md focus:ring-1 focus:ring-blue-500 text-lg outline-none"
            />
          ))}
        </div>

        <div className="mb-4 text-sm text-gray-800">
          {timer > 0 ? `OTP expires in ${timer}s` : "OTP expired"}
        </div>

        <button
          onClick={handleVerify}
          disabled={loading}
          className={`w-full py-2.5 rounded-lg text-white font-semibold ${
            loading ? "bg-blue-400" : "bg-blue-900 hover:bg-blue-800"
          }`}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          onClick={handleResend}
          disabled={!resendAllowed || loading}
          className="mt-2 w-full py-2 text-sm text-blue-600 hover:underline disabled:text-gray-400"
        >
          Resend OTP
        </button>

        <button
          onClick={onClose}
          className="mt-2 text-sm text-gray-800 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OTPModal;
