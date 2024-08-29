"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/Dropdown"
import { RiArrowRightUpLine } from "@remixicon/react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import * as React from "react"

export type DropdownUserProfileProps = {
  children: React.ReactNode
  align?: "center" | "start" | "end"
}

export function DropdownUserProfile({
  children,
  align = "start",
}: DropdownUserProfileProps) {
  const [mounted, setMounted] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [user, setUser] = React.useState({
    email: "",
  })
  const router = useRouter()

  React.useEffect(() => {
    setMounted(true)
    setIsClient(true)
    fetchUserData()
  }, [])

  async function fetchUserData() {
    try {
      const accessToken = localStorage.getItem("access-token")
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
        email: data.email,
      })
    } catch (error) {
      console.error("Error fetching user data:", error)
    }
  }

  const handleSignOut = React.useCallback(async () => {
    try {
      const accessToken = localStorage.getItem("access-token")
      if (!accessToken) {
        throw new Error("No access token found")
      }

      const response = await fetch("http://localhost:3000/auth/signout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to sign out")
      }

      // Clear the access token from local storage
      localStorage.removeItem("access-token")

      // Redirect to the login page or home page
      if (isClient) {
        router.push("/signin")
      } else if (typeof window !== "undefined") {
        window.location.href = "/signin"
      }
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }, [isClient, router])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <a href="/docs">
            <DropdownMenuItem>
              Documentation
              <RiArrowRightUpLine
                className="mb-1 ml-1 size-2.5 shrink-0 text-gray-500"
                aria-hidden="true"
              />
            </DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-red-600" onSelect={handleSignOut}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
