"use client"
import { useEffect, useState } from "react"

interface RepositoryData {
  id: string
  name: string
  description: string
  sonarqube_token: string
  url: string
  analysis_result?: {
    qualityGate?: {
      status: string
      conditions?: Array<{
        metric: string
        status: string
      }>
    }
  }
}

const ProjectDisplay = ({ params }: { params: { projectId: string } }) => {
  const [data, setData] = useState<RepositoryData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepositoryData() {
      try {
        const accessToken = localStorage.getItem("access-token")
        if (!accessToken) throw new Error("No access token found")

        const response = await fetch(
          `http://localhost:3000/repository/${params.projectId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          },
        )

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(
            `Failed to fetch repository data: ${response.status} ${errorText}`,
          )
        }

        const repoData = await response.json()
        setData(repoData)
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error))
      } finally {
        setLoading(false)
      }
    }

    fetchRepositoryData()
  }, [params.projectId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return <div>No data available</div>

  return (
    <>
      <h2 className="my-5">
        Quality status: {data.analysis_result?.qualityGate?.status || "N/A"}
      </h2>

      <div className="my-4">
        <h3>Repository Details</h3>
        <p>Name: {data.name}</p>
        <p>Description: {data.description}</p>
        <p>URL: {data.url}</p>
        <p>Sonarqube Token: {data.sonarqube_token}</p>
      </div>

      {data.analysis_result?.qualityGate?.conditions && (
        <div className="my-4">
          <h3>Quality Gate Conditions:</h3>
          <ul>
            {data.analysis_result.qualityGate.conditions.map(
              (condition, index) => (
                <li key={index}>
                  {condition.metric}: {condition.status}
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </>
  )
}

export default ProjectDisplay
