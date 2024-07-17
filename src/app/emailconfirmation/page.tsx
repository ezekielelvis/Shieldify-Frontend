import { Button } from "@/components/Button"
import { RiArrowRightLine } from "@remixicon/react"
import Link from "next/link"
import Player from "react-lottie-player"
import lottieJson from "../../../public/assets/Animation - 1721053233970.json" // Replace with the actual path to your Lottie JSON file

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link href="">
        <Player
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }} // Adjust size as needed
        />
      </Link>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Email confirmation success
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href="/signin">
          Go to the Login page
          <RiArrowRightLine
            className="ml-1.5 size-5 text-gray-900 dark:text-gray-50"
            aria-hidden="true"
          />
        </Link>
      </Button>
    </div>
  )
}
