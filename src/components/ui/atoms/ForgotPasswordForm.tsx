import Link from "next/link"

const ForgotPasswordForm: React.FC = () => {
  return (
    <div className="flex h-full w-screen items-center justify-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-8 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-xs">
          <h1 className="mt-6 text-center text-xl font-bold leading-8 tracking-tight text-gray-900">
            Reset your password
          </h1>

          <p className="mt-2 text-center text-xs text-gray-600">
            Enter the email address associated with your account <br />
            and we will send you a link to reset your password.
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xs">
          <form className="space-y-4" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Link href="/home">Reset Password</Link>
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold leading-5 text-blue-600 hover:text-blue-500"
            >
              Sign In
            </Link>
          </p>

          <p className="mt-10 text-center text-xs text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold leading-5 text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordForm
