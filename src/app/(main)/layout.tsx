"use client"

import { Sidebar } from "@/components/ui/navigation/sidebar"
import { ThemeProvider } from "next-themes"
import { createContext, useState } from "react"
interface HomePageProps {
  children: React.ReactNode
}

interface State {
  tab: number
  handleTab: (value: number) => void
}

export const Tab = createContext({})

const HomeLayout = ({ children }: HomePageProps) => {
  const [tab, setTab] = useState<State["tab"]>(1)

  const handleTab = (value: number) => {
    setTab(value)
  }
  return (
    <div className="mx-auto max-w-screen-2xl">
      <ThemeProvider defaultTheme="light" attribute="class">
        <Sidebar />
        <Tab.Provider value={{ tab, handleTab }}>
          <main className="lg:pl-72">{children}</main>
        </Tab.Provider>
      </ThemeProvider>
    </div>
  )
}

export default HomeLayout
