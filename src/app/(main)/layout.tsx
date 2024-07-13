import { Sidebar } from "@/components/ui/navigation/sidebar";

interface HomePageProps{
    children: React.ReactNode
}

const HomeLayout=({
    children
}:HomePageProps)=>{
    return(
        <div className="mx-auto max-w-screen-2xl">
        
          <Sidebar />
          <main className="lg:pl-72">{children}</main>
       
      </div>
    )
}


export default HomeLayout;