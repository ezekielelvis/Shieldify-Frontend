"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaGithub, FaGoogle, FaSpinner } from "react-icons/fa"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      // Store user info and access token separately in localStorage
      localStorage.setItem("user-info", JSON.stringify(data.user))
      localStorage.setItem("access-token", data.access_token)
      localStorage.setItem("userId", data.user.id)

      router.push("/details")
    } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        setError(
          "Network error: Unable to connect to the server. Please check your internet connection and try again.",
        )
      } else if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGitHubLogin() {
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:3000/auth/github", {
        method: "GET",
        headers: {
          accept: "*/*",
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "GitHub login failed")
      }

      // Assuming the OAuth provider returns user info and access token
      localStorage.setItem("user-info", JSON.stringify(data.user))
      localStorage.setItem("access-token", data.access_token)
      localStorage.setItem("userId", data.user.id)

      router.push("/details")
    } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        setError("Error")
      } else if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGoogleLogin() {
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:3000/auth/google", {
        method: "GET",
        headers: {
          accept: "*/*",
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Google login failed")
      }

      // Assuming the OAuth provider returns user info and access token
      localStorage.setItem("user-info", JSON.stringify(data.user))
      localStorage.setItem("access-token", data.access_token)
      localStorage.setItem("userId", data.user.id)

      router.push("/details")
    } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        setError(
          "Network error: Unable to connect to the server. Please check your internet connection and try again.",
        )
      } else if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-full w-screen items-center justify-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-8 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-xs">
          <h2 className="mt-6 text-center text-xl font-bold leading-8 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xs">
          <form className="space-y-4" onSubmit={login}>
            {error && (
              <div className="text-center text-sm text-red-500">{error}</div>
            )}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-900"
                >
                  Password
                </label>
                <div className="text-xs">
                  <Link
                    href="/forgotpassword"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="mr-2 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-row">
            <button
              type="button"
              onClick={handleGitHubLogin}
              className="mx-1 flex w-full items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm font-semibold leading-5 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <FaGithub className="mr-1" />
              GitHub
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="mx-1 flex w-full items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm font-semibold leading-5 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <FaGoogle className="mr-1" />
              Google
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Not a member?{" "}
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

export default LoginForm
