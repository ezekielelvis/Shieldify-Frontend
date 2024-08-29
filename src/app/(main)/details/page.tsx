"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa"

interface Repository {
  id: string
  name: string
  description: string
  sonarqube_token: string
  projectId: string
  url: string
}

const getInitials = (name: string) => {
  const nameParts = name.split(" ")
  return nameParts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-emerald-500"
    case "busy":
      return "bg-red-500"
    case "away":
      return "bg-yellow-500"
    case "offline":
      return "bg-gray-500"
    default:
      return "bg-gray-500"
  }
}

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="loader h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
  </div>
)

export default function PeopleList() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchRepositories() {
    try {
      const accessToken = localStorage.getItem("access-token")

      if (!accessToken) {
        throw new Error("No access token found")
      }

      const response = await fetch("http://localhost:3000/repository", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch repository data")
      }

      const data = await response.json()
      console.log("API Response:", data) // Log the response to the console

      // Map data to include projectId as sonarqube_token
      const repositoriesWithProjectId = data.map((repo: any) => ({
        ...repo,
        projectId: repo.sonarqube_token,
      }))

      setRepositories(repositoriesWithProjectId)
    } catch (error) {
      console.error("Error fetching repository data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50 sm:text-xl">
        Workspace
      </h1>
      <p className="pb-5 text-sm text-gray-900 dark:text-gray-400 sm:text-sm">
        View all your workspaces here
      </p>
      <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-700">
        {repositories.map((repo) => (
          <li key={repo.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-blue-500 text-lg font-semibold text-white">
                {getInitials(repo.name)}
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  {repo.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {repo.description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 dark:text-gray-100">
                  Project key: {repo.projectId}
                </p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div
                    className={`flex-none rounded-full p-1 ${getStatusColor("online")}/20`}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${getStatusColor("online")}`}
                    />
                  </div>
                  <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                    Online
                  </p>
                </div>
              </div>
              <div className="m-5 flex items-center">
                <Link
                  href={`/details/${repo.projectId}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
