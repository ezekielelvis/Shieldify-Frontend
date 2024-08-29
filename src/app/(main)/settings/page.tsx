"use client"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function Example() {
  const [formData, setFormData] = useState({
    username: "",
    photo: "",
    password: "",
    repeatPassword: "",
    email: "",
  })
  const [userId, setUserId] = useState("")
  const [accessToken, setAccessToken] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState<{ [key: string]: boolean }>(
    {},
  )
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    const storedAccessToken = localStorage.getItem("access-token")
    if (storedUserId && storedAccessToken) {
      setUserId(storedUserId)
      setAccessToken(storedAccessToken)
    } else {
      console.error("User ID or access token not found in localStorage")
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({
          ...formData,
          photo: reader.result as string,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "username":
        return value.trim() ? "" : "Username is required"
      case "email":
        return value.trim()
          ? /\S+@\S+\.\S+/.test(value)
            ? ""
            : "Email is invalid"
          : "Email is required"
      case "password":
        return value
          ? value.length >= 6
            ? ""
            : "Password must be at least 6 characters"
          : "Password is required"
      case "repeatPassword":
        return value === formData.password ? "" : "Passwords do not match"
      default:
        return ""
    }
  }

  const handleSubmit = async (field: string) => {
    const error = validateField(field, formData[field as keyof typeof formData])
    if (error) {
      setErrors({ ...errors, [field]: error })
      return
    }

    setIsSubmitting({ ...isSubmitting, [field]: true })
    try {
      const response = await axios.patch(
        `http://localhost:3000/users/${userId}`,
        { field, value: formData[field as keyof typeof formData] },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      )
      console.log(`Updated ${field}:`, response.data)
      alert(
        `${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully!`,
      )
    } catch (error) {
      console.error(`Error updating ${field}:`, error)
      alert(`An error occurred while updating ${field}. Please try again.`)
    } finally {
      setIsSubmitting({ ...isSubmitting, [field]: false })
    }
  }

  const handlePhotoSubmit = async () => {
    setIsSubmitting({ ...isSubmitting, photo: true })
    try {
      const response = await axios.patch(
        `http://localhost:3000/users/${userId}`,
        { field: "avatar", value: formData.photo },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      )
      console.log("Updated photo:", response.data)
      alert("Photo updated successfully!")
    } catch (error) {
      console.error("Error updating photo:", error)
      alert("An error occurred while updating photo. Please try again.")
    } finally {
      setIsSubmitting({ ...isSubmitting, photo: false })
    }
  }

  return (
    <form className="my-5">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="janesmith"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                {errors.username && (
                  <p className="mt-2 text-sm text-red-600">{errors.username}</p>
                )}
              </div>
              <button
                type="button"
                className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={() => handleSubmit("username")}
                disabled={isSubmitting.username}
              >
                {isSubmitting.username ? "Saving..." : "Save Username"}
              </button>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {formData.photo ? (
                  <img
                    src={formData.photo}
                    alt="Profile"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                )}
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Change
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <button
                type="button"
                className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={handlePhotoSubmit}
                disabled={isSubmitting.photo}
              >
                {isSubmitting.photo ? "Saving..." : "Save Photo"}
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="repeatPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Repeat Password
                </label>
                <div className="mt-2">
                  <input
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                  />
                  {errors.repeatPassword && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.repeatPassword}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <button
                type="button"
                className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={() => handleSubmit("password")}
                disabled={isSubmitting.password}
              >
                {isSubmitting.password ? "Saving..." : "Save Password"}
              </button>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <button
                type="button"
                className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={() => handleSubmit("email")}
                disabled={isSubmitting.email}
              >
                {isSubmitting.email ? "Saving..." : "Save Email"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
