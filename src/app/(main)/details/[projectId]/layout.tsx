"use client"
import { AnalysisProvider, useAnalysis } from "@/context/AnalysisContext"
import { cx } from "@/lib/utils"
import { Dialog } from "@headlessui/react"
import "ldrs/cardio"
import "ldrs/ring"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { FaSearch, FaSpinner, FaTrash } from "react-icons/fa"
import { MdBugReport, MdOutlineDashboard, MdSecurity } from "react-icons/md"

interface Params {
  children: React.ReactNode
  params: { projectId: string }
}

interface Repository {
  id: string
  name: string
  description: string
  sonarqube_token: string
  project_key: string
  url: string
  analysis_result?: {
    qualityGate: {
      status: string
    }
    issues?: any
    hotspots?: any
  }
}

const Layer = ({ children, params }: Params) => {
  const [data, setData] = useState<Repository | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [analyzeStatus, setAnalyzeStatus] = useState<
    "idle" | "analyzing" | "complete" | "error"
  >("idle")
  const [analyzeError, setAnalyzeError] = useState<string | null>(null)
  const router = useRouter()
  const { analysisData, setAnalysisData } = useAnalysis()
  const pathname = usePathname()

  useEffect(() => {
    async function fetchRepositoryData() {
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

        const repositories: Repository[] = await response.json()
        const matchingRepo = repositories.find(
          (repo) => repo.sonarqube_token === params.projectId,
        )

        if (matchingRepo) {
          setData(matchingRepo)
        } else {
          throw new Error("No matching repository found")
        }
      } catch (error) {
        console.error("Error fetching repository data:", error)
        setError(error instanceof Error ? error.message : String(error))
      } finally {
        setLoading(false)
      }
    }

    fetchRepositoryData()
  }, [params.projectId])

  useEffect(() => {
    if (data && data.sonarqube_token === params.projectId) {
      router.push(`/details/${params.projectId}/overview`)
    }
  }, [data, params.projectId, router])

  const handleOpenModal = () => {
    setIsModalOpen(true)
    analyzeRepository()
  }

  const analyzeRepository = async () => {
    setAnalyzeStatus("analyzing")
    setAnalyzeError(null)
    try {
      const accessToken = localStorage.getItem("access-token")
      const userId = localStorage.getItem("userId")
      if (!accessToken || !data) {
        throw new Error("No access token or repository data found")
      }

      const response = await fetch("http://localhost:3000/sandbox/analyze", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          repositoryId: data.id,
          userId: userId || "defaultUserId",
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`,
        )
      }

      const result = await response.json()
      console.log("Analysis result:", result)
      if (result.sandbox && result.sandbox.analysis_result) {
        setAnalysisData(result)
        console.log("Analysis data set:", result)
        setAnalyzeStatus("complete")
        localStorage.setItem("analysisResult", JSON.stringify(result))
        localStorage.setItem("analyzeStatus", "complete")
      } else {
        throw new Error("Invalid analysis result structure")
      }
    } catch (error) {
      console.error("Error analyzing repository:", error)
      setAnalyzeStatus("error")
      setAnalyzeError(error instanceof Error ? error.message : String(error))
      localStorage.setItem("analyzeStatus", "error")
      localStorage.setItem(
        "analyzeError",
        error instanceof Error ? error.message : String(error),
      )
    }
  }

  useEffect(() => {
    const savedStatus = localStorage.getItem("analyzeStatus")
    if (savedStatus) {
      setAnalyzeStatus(
        savedStatus as "idle" | "analyzing" | "complete" | "error",
      )
    }

    const savedResult = localStorage.getItem("analysisResult")
    if (savedResult) {
      const parsedResult = JSON.parse(savedResult)
      if (data && parsedResult.sandbox.repositoryId === data.id) {
        setAnalysisData(parsedResult)
      }
    }

    const savedError = localStorage.getItem("analyzeError")
    if (savedError) {
      setAnalyzeError(savedError)
    }
  }, [data, setAnalysisData])

  useEffect(() => {
    if (analyzeStatus === "complete" && analysisData) {
      console.log("Analysis data updated:", analysisData)
    }
  }, [analyzeStatus, analysisData])

  const handleDeleteRepository = async () => {
    try {
      const accessToken = localStorage.getItem("access-token")
      if (!accessToken || !data) {
        throw new Error("No access token or repository data found")
      }

      const response = await fetch(
        `http://localhost:3000/repository/${data.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`,
        )
      }

      // Repository successfully deleted
      setIsDeleteModalOpen(false)
      // Clear local storage data related to this repository
      localStorage.removeItem("analysisResult")
      localStorage.removeItem("analyzeStatus")
      localStorage.removeItem("analyzeError")
      // Redirect to the repositories list or dashboard
      router.push("/details")
    } catch (error) {
      console.error("Error deleting repository:", error)
      // Handle the error (e.g., show an error message to the user)
      alert(error instanceof Error ? error.message : String(error))
    }
  }

  if (loading)
    return (
      <div className="align-center flex justify-center">
        <FaSpinner className="mr-2 animate-spin" />
        Loading...
      </div>
    )
  if (error) return <div>Error: {error}</div>
  if (!data) return <div>No data available</div>

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-lg font-bold dark:text-white">Workspace Details</p>
          <p className="text-sm text-gray-600">Workspace Name: {data.name}</p>
        </div>
        <div className="flex flex-col items-end space-x-2">
          <p className="text-sm text-gray-600">Workspace ID: {data.id}</p>
          <p className="text-sm text-gray-600">
            Workspace Key: {data.sonarqube_token}
          </p>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          className="mt-4 flex items-center rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
          onClick={handleOpenModal}
        >
          <FaSearch className="mr-2" size={12} />
          Analyze
        </button>
        <button
          className="mt-4 flex items-center rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <FaTrash className="mr-2" size={12} />
          Delete
        </button>
      </div>

      <div className="mt-5 flex gap-5 border-b dark:border-gray-600 dark:text-white">
        <Link
          href={`/details/${data.sonarqube_token}/overview`}
          className={cx(
            "flex cursor-pointer items-center py-2 text-base font-semibold transition-colors",
            pathname.includes("/overview")
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:text-blue-500",
          )}
        >
          <MdOutlineDashboard className="mr-2" size={14} />
          Overview
        </Link>

        <Link
          href={`/details/${data.sonarqube_token}/issues`}
          className={cx(
            "flex cursor-pointer items-center py-2 text-base font-semibold transition-colors",
            pathname.includes("/issues")
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:text-blue-500",
          )}
        >
          <MdBugReport className="mr-2" size={14} />
          Issues
        </Link>

        <Link
          href={`/details/${data.sonarqube_token}/hotspot`}
          className={cx(
            "flex cursor-pointer items-center py-2 text-base font-semibold transition-colors",
            pathname.includes("/hotspot")
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:text-blue-500",
          )}
        >
          <MdSecurity className="mr-2" size={14} />
          Security Hotspot
        </Link>
      </div>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center p-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="mb-4 text-xl font-semibold leading-6 text-gray-900">
              Repository Analysis
            </Dialog.Title>

            <div className="mt-4">
              {analyzeStatus === "analyzing" && (
                <div className="flex items-center justify-center">
                  <span className="text-lg">👀 Analyzing repository...</span>
                  <FaSpinner className="mr-2 animate-spin" />
                </div>
              )}

              {analyzeStatus === "complete" && (
                <div className="text-center">
                  <h3 className="text-lg font-medium text-green-600">
                    👍Analysis Complete
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Your repository has been successfully analyzed.
                  </p>
                  {analysisData && (
                    <div className="mt-4 text-left">
                      <h4 className="font-semibold">Analysis Results:</h4>
                      <pre className="mt-2 max-h-60 overflow-auto rounded bg-gray-100 p-2">
                        {JSON.stringify(analysisData, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              )}

              {analyzeStatus === "error" && (
                <div className="text-center">
                  <h3 className="text-lg font-medium text-red-600">
                    🤧 Analysis Failed
                  </h3>
                  <p className="mt-2 text-gray-600">{analyzeError}</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 transition-colors hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center p-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="mb-4 text-xl font-semibold leading-6 text-gray-900">
              Delete Repository
            </Dialog.Title>

            <p className="mb-6 text-gray-600">
              Are you sure you want to delete this repository? This action
              cannot be undone.
            </p>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={handleDeleteRepository}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      <section>{children}</section>
    </>
  )
}

const LayerWithProvider = (props: Params) => (
  <AnalysisProvider>
    <Layer {...props} />
  </AnalysisProvider>
)

export default LayerWithProvider
