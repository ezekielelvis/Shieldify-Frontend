import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import logo from "../../../public/Exclude.svg"

interface Feature {
  name: string
  description: string
  icon: (props: React.ComponentProps<"svg">) => JSX.Element
}

const features: Feature[] = [
  {
    name: "Cost-effective solution",
    description:
      "Shieldify is a free tool, making it an affordable option for startups and individual developers. By providing automated code testing and analysis without any additional costs",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Improved code quality",
    description:
      "By performing comprehensive tests and providing detailed analysis, Shieldify helps improve the overall quality of your codebase.",
    icon: LockClosedIcon,
  },
  {
    name: "Reliable and consistent testing",
    description:
      "The automated nature of Shieldify ensures that tests are performed consistently and accurately. This reliability helps identify issues early in the development cycle",
    icon: ArrowPathIcon,
  },
  {
    name: "Enhanced productivity",
    description:
      "Shieldify automates the code testing and analysis process, allowing developers to focus on writing code rather than manually running tests and analyzing results.",
    icon: FingerPrintIcon,
  },
]

const Example: React.FC = () => {
  return (
    <>
      <div className="m-3 flex p-3 lg:flex-1">
        <a href="/" className="m-2 p-2">
          <span className="sr-only">Your Company</span>
          <Image alt="Your Company" src={logo} className="h-8 w-auto" />
        </a>
      </div>
      <div className="mx-auto max-w-7xl bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Test Your Codebase
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to test your code
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This automated solution performs comprehensive tests on your
            codebase, analyzing various aspects such as performance, security
            vulnerabilities, and code quality. The results are presented in an
            intuitive graphical format, making it easy for developers to
            understand and address issues promptly.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

export default Example
