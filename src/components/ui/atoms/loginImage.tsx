"use client"

import Image from "next/image"
import LOGO from "../../../../public/Exclude.svg"

const LoginImage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={LOGO}
                alt="Your Company Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </nav>
      </header>

      <main className="relative isolate flex-grow px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="animate-blob absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2639B7] to-[#9089fc] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="animate-blob absolute inset-x-0 top-1/4 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-1/3"
        >
          <div
            style={{
              clipPath:
                "polygon(60% 0%, 100% 0%, 100% 60%, 40% 100%, 0% 100%, 0% 40%)",
            }}
            className="relative left-[calc(50%-8rem)] aspect-[1155/678] w-[30rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#2639b7a0] to-[#1101ec] opacity-60 sm:left-[calc(50%-24rem)] sm:w-[60rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="flex items-center justify-center"></div>
        </div>
        <div
          aria-hidden="true"
          className="animate-blob absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2639B7] to-[#2029a7] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="animate-blob absolute inset-x-0 top-[calc(50%-5rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-10rem)]"
        >
          <div
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
            className="relative left-[calc(50%-6rem)] aspect-[1155/678] w-[24rem] -translate-x-1/2 rotate-[45deg] bg-gradient-to-tr from-[#2639B7] to-[#0e1c42] opacity-50 sm:left-[calc(50%-18rem)] sm:w-[48rem]"
          />
        </div>
      </main>
    </div>
  )
}

export default LoginImage
