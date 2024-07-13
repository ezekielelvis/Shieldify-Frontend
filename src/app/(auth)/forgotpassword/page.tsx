// components/ForgotPassword.tsx

import ForgotPasswordForm from "@/components/ui/atoms/ForgotPasswordForm";
import LoginImage from "@/components/ui/atoms/loginImage";

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginImage />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-white">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;