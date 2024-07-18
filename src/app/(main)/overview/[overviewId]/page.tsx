import { data } from "@/data/data"
import { cx } from "@/lib/utils"
import Link from "next/link"


const OverviewIdPage = async() => {

  const projectId = await data.id
  return <>
    <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-lg font-bold">Workspace Details</p>
          <p className="text-sm text-gray-600">
            Workspace Name: {data.project_key}
          </p>
        </div>
        <div className="flex flex-col items-end space-x-2">
          <p className="text-sm text-gray-600">Workspace ID: {data.id}</p>
          <p className="text-sm text-gray-600">Workspace Key: {data.id}</p>
        </div>
      </div>
      <div className="mt-5 flex gap-5 border-b">
        <Link
          href={`/details/${projectId}/overview`}
          className={cx("py-2", "text-base", "font-semibold", "cursor-pointer")}
        >
          Overview
        </Link>

        <Link href={`/details/${projectId}/issues`}>
          <h2
            className={cx(
              "py-2",
              "text-base",
              "font-semibold",
              "cursor-pointer",
            )}
          >
            Issues
          </h2>
        </Link>
        <Link
          href={`/details/${projectId}/hotspot`}
          className={cx("py-2", "text-base", "font-semibold", "cursor-pointer")}
        >
          Security Hotspot
        </Link>
      </div>
  </>
}

export default OverviewIdPage
