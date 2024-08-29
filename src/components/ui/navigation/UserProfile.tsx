"use client"

import { Button } from "@/components/Button"
import { cx, focusRing } from "@/lib/utils"
import { RiMore2Fill } from "@remixicon/react"
import { useEffect, useState } from "react"
import { DropdownUserProfile } from "./DropdownUserProfile"

export const UserProfileDesktop = () => {
  const [user, setUser] = useState({
    name: "",
  })

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
      })
    } catch (error) {
      console.error("Error fetching user data:", error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <DropdownUserProfile>
      <Button
        aria-label="User settings"
        variant="ghost"
        className={cx(
          focusRing,
          "group flex w-full items-center justify-between rounded-md p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 data-[state=open]:bg-gray-100 data-[state=open]:bg-gray-400/10 hover:dark:bg-gray-400/10",
        )}
      >
        <span className="flex items-center gap-3">
          <span>{user.name}</span>
        </span>
        <RiMore2Fill
          className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-hover:dark:text-gray-400"
          aria-hidden="true"
        />
      </Button>
    </DropdownUserProfile>
  )
}
