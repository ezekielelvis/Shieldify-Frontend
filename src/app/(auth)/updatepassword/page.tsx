import LoginImage from "@/components/ui/atoms/loginImage"
import UpdatePasswordForm from "@/components/ui/atoms/UpdatePasswordForm"

const updatepassword: React.FC = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <LoginImage />
      </div>
      <div className="hidden h-full w-1/2 items-center justify-center bg-white lg:flex">
        <UpdatePasswordForm />
      </div>
    </div>
  )
}

export default updatepassword
