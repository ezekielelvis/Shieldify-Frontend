"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const getInitials = (name: string) => {
  const nameParts = name.split(" ")
  return nameParts.map((part) => part[0]).join("")
}

const getGreeting = (name: string) => {
  const hours = new Date().getHours()
  const timeOfDay =
    hours < 12 ? "Morning" : hours < 18 ? "Afternoon" : "Evening"
  const emoji = hours < 12 ? "🌞" : hours < 18 ? "🌤️" : "🌚"
  return `Good ${timeOfDay}, ${name} ${emoji}`
}

export default function Greetings() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  })
  const [greeting, setGreeting] = useState("")

  async function fetchUserData() {
    try {
      const accessToken = localStorage.getItem("access-token")
      console.log("Access Token:", accessToken)

      if (!accessToken) {
        throw new Error("No access token found")
      }

      const response = await fetch("http://localhost:3000/auth/validate", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch user data")
      }

      const data = await response.json()
      setUser({
        name: data.username,
        email: data.email,
        avatar: data.avatar || "",
      })
      setGreeting(getGreeting(data.username))
    } catch (error) {
      console.error("Error fetching user data:", error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{greeting}</span>
      {user.avatar ? (
        <div className="relative h-10 w-10">
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      ) : (
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          {getInitials(user.name)}
        </div>
      )}
    </div>
  )
}
