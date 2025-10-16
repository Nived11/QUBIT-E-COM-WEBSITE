import { useState, type ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import api from '../../../../api/axios';
import { useNavigate } from 'react-router-dom';
import { extractErrorMessages } from '../../../../utils/helpers/extractErrorMessages';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  proofDocument: File | null;
  termsAccepted: boolean;
}

export const useSignup = () => {
  const [accountType, setAccountType] = useState<'buyer' | 'seller'>('buyer');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    proofDocument: null,
    termsAccepted: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [otpEmail, setOtpEmail] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'file'
          ? files?.[0] ?? null
          : value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!formData.termsAccepted) {
      toast.error('Please accept terms and conditions');
      return;
    }

    if (accountType === 'seller' && (!formData.companyName || !formData.proofDocument)) {
      toast.error('Please fill company details and upload proof document');
      return;
    }

    try {
      setLoading(true);

      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('password', formData.password);
      payload.append('userType', accountType);
      if (accountType === "seller") {
        payload.append("companyName", formData.companyName);
      if (formData.proofDocument) {
         payload.append("companyProof", formData.proofDocument);
    }
}

      payload.append('purpose', 'signup');

      await api.post('/otp/generate-otp', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('OTP sent to email. Please verify.');
      
      setOtpEmail(formData.email); 

    } catch (err: unknown) {
      toast.error(extractErrorMessages(err));
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  return {
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
  };
};
