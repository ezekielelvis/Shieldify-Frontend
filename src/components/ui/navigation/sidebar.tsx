"use client"
import { siteConfig } from "@/app/siteConfig"
import Greetings from "@/components/Greetings"
import { cx, focusRing } from "@/lib/utils"
import { RiListCheck, RiSettings5Line } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "../../../../public/Exclude.svg"
import { WorkspacesDropdownDesktop } from "./SidebarWorkspacesDropdown"
import { UserProfileDesktop } from "./UserProfile"

const navigation = [
  { name: "Workspaces", href: siteConfig.baseLinks.details, icon: RiListCheck },
  {
    name: "Settings",
    href: siteConfig.baseLinks.settings,
    icon: RiSettings5Line,
  },
] as const

type SidebarProps = {
  refreshRepositories: () => Promise<void>
}

export function Sidebar({ refreshRepositories }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (itemHref: string) => {
    if (itemHref === siteConfig.baseLinks.settings) {
      return pathname.startsWith("/settings")
    }
    return pathname === itemHref || pathname.startsWith(itemHref)
  }

  return (
    <>
      <nav className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <aside className="flex grow flex-col gap-y-6 overflow-y-auto border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <WorkspacesDropdownDesktop
            refreshRepositories={refreshRepositories}
          />
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
          </nav>
          <div className="mt-auto">
            <UserProfileDesktop />
          </div>
        </aside>
      </nav>
      <div className="flex flex-col lg:ml-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-row items-center justify-center">
            <Image src={logo} alt="Logo" width={35} height={35} />
            <h1 className="mx-3 text-xl font-bold text-black dark:text-white">
              Shieldify
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Greetings />
          </div>
        </div>
      </div>
    </>
  )
}
