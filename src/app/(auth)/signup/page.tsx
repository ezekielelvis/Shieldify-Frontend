// components/Signup.tsx

import LoginImage from "@/components/ui/atoms/loginImage";
import SignupForm from "@/components/ui/atoms/SignupForm";

const Signup: React.FC = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginImage />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-white">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;