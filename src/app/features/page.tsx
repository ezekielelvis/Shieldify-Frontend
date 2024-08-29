import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid"
import Image from "next/image"
import logo from "../../../public/Exclude.svg"
import dashboard from "../../../public/assets/dashboard01.png"

const Example: React.FC = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute left-0 top-0 m-3 flex p-3 lg:flex-1">
          <a href="/" className="m-2 p-2">
            <span className="sr-only">Your Company</span>
            <Image alt="Your Company" src={logo} className="h-8 w-auto" />
          </a>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-blue -600 text-base font-semibold leading-7">
                  Test Your Codebase
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  This automated solution performs comprehensive tests on your
                  codebase, analyzing various aspects such as performance,
                  security vulnerabilities, and code quality.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              alt=""
              src={dashboard}
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Our automation ensures a consistent and reliable development
                  process, reducing errors, improving code quality, and
                  enhancing team collaboration.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      aria-hidden="true"
                      className="text-blue -600 mt-1 h-5 w-5 flex-none"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Cost-effective solution
                      </strong>{" "}
                      Shieldify is a free tool, making it an affordable option
                      for startups and individual developers. By providing
                      automated code testing and analysis without any additional
                      costs
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      aria-hidden="true"
                      className="text-blue -600 mt-1 h-5 w-5 flex-none"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Improved code quality
                      </strong>{" "}
                      By performing comprehensive tests and providing detailed
                      analysis, Shieldify helps improve the overall quality of
                      your codebase.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      aria-hidden="true"
                      className="text-blue -600 mt-1 h-5 w-5 flex-none"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Metrics
                      </strong>{" "}
                      By analyzing various aspects of your codebase, Shieldify
                      provides insights into your codebase's performance,
                      security vulnerabilities, and code quality, making it
                      easier to identify and address issues.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Shildify seamlessly integrates with your GitHub repository,
                  Shieldify virtualizes your code using Docker containers,
                  ensuring an isolated and consistent environment for testing.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  No pipeline? No problem.
                </h2>
                <p className="mt-6">
                  Shieldify does not need a CI/CD pipeline to work it is about
                  we can test code with a button, allowing you to run automated
                  tests and analysis directly from your repository. Simply
                  enable Shieldify in your GitHub repository settings and follow
                  the provided instructions to set up the integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Example
