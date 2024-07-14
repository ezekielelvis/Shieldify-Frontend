"use client"
import { siteConfig } from "@/app/siteConfig"
import { cx, focusRing } from "@/lib/utils"
import {
  RiHome2Line,
  RiLinkM,
  RiListCheck,
  RiSettings5Line,
} from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import logo from "../../../../public/logo.png"
import { WorkspacesDropdownDesktop } from "./SidebarWorkspacesDropdown"
import { UserProfileDesktop } from "./UserProfile"

const navigation = [
  { name: "Overview", href: siteConfig.baseLinks.overview, icon: RiHome2Line },
  { name: "Details", href: siteConfig.baseLinks.details, icon: RiListCheck },
  {
    name: "Settings",
    href: siteConfig.baseLinks.settings,
    icon: RiSettings5Line,
  },
] as const

const shortcuts = [
  {
    name: "Add new user",
    href: "#",
    icon: RiLinkM,
  },
  {
    name: "Workspace usage",
    href: "#",
    icon: RiLinkM,
  },
  {
    name: "Cost spend control",
    href: "#",
    icon: RiLinkM,
  },
  {
    name: "Overview – Rows written",
    href: "#",
    icon: RiLinkM,
  },
] as const

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "", // No image URL provided
}

// Helper function to get user initials
const getInitials = (name) => {
  const nameParts = name.split(" ")
  return nameParts.map((part) => part[0]).join("")
}

// Helper function to generate greeting based on current time
const getGreeting = (name) => {
  const hours = new Date().getHours()
  const timeOfDay =
    hours < 12 ? "morning" : hours < 18 ? "afternoon" : "evening"
  const emoji = hours < 12 ? "🌅" : hours < 18 ? "☀️" : "🌙"
  return `Good ${timeOfDay}, ${name} ${emoji}`
}

export function Sidebar() {
  const pathname = usePathname()
  const isActive = (itemHref: string) => {
    if (itemHref === siteConfig.baseLinks.settings) {
      return pathname.startsWith("/settings")
    }
    return pathname === itemHref || pathname.startsWith(itemHref)
  }

  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    setGreeting(getGreeting(user.name))
  }, [])

  return (
    <>
      {/* sidebar (lg+) */}
      <nav className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <aside className="flex grow flex-col gap-y-6 overflow-y-auto border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <WorkspacesDropdownDesktop />
          <nav
            aria-label="core navigation links"
            className="flex flex-1 flex-col space-y-10"
          >
            <ul role="list" className="space-y-0.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cx(
                      isActive(item.href)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                      "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900",
                      focusRing,
                    )}
                  >
                    <item.icon className="size-4 shrink-0" aria-hidden="true" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <span className="text-xs font-medium leading-6 text-gray-500">
                Shortcuts
              </span>
              <ul aria-label="shortcuts" role="list" className="space-y-0.5">
                {shortcuts.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cx(
                        pathname === item.href || pathname.startsWith(item.href)
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                        "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900",
                        focusRing,
                      )}
                    >
                      <item.icon
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="mt-auto">
            <UserProfileDesktop />
          </div>
        </aside>
      </nav>
      {/* top navbar (right side) */}
      <div className="flex flex-col lg:ml-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{greeting}</span>
            {user.imageUrl ? (
              <div className="relative h-10 w-10">
                <Image
                  src={user.imageUrl}
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
        </div>
      </div>
    </>
  )
}
