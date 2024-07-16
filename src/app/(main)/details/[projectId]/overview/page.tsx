import { data } from "@/data/data"
import { cx } from "@/lib/utils"
import Link from "next/link"

const OverviewPage = async () => {
  const projectId = await data.id
  return (
    <>
      <h2>What for dey here</h2>
    </>
  )
}

export default OverviewPage
