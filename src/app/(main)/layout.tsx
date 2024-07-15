import { Sidebar } from "@/components/ui/navigation/sidebar"
import { ThemeProvider } from "next-themes"

interface HomePageProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomePageProps) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <ThemeProvider defaultTheme="light" attribute="class">
        <Sidebar />
        <main className="lg:pl-72">{children}</main>
      </ThemeProvider>
    </div>
  )
}

export default HomeLayout
