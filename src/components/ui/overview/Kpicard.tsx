"use client"

import { useAnalysis } from "@/context/AnalysisContext"

export const Kpicard = () => {
  const { analysisData } = useAnalysis()

  console.log("Kpicard - Analysis Data:", analysisData)

  if (!analysisData || !analysisData.sandbox?.analysis_result?.metrics) {
    console.log("Kpicard - No metrics data available")
    return <div>No data available</div>
  }

  const metrics = analysisData.sandbox.analysis_result.metrics || {}
  console.log("Kpicard - Metrics:", metrics)

  const data = [
    {
      name: "Lines of Code",
      stat: metrics.ncloc || "N/A",
    },
    {
      name: "Code Smells",
      stat: metrics.code_smells || "N/A",
    },
    {
      name: "Bugs",
      stat: metrics.bugs || "N/A",
    },
  ]

  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.name} className="rounded-md border p-4 shadow-md">
            <div className="flex items-center justify-between">
              <dt className="font-medium text-gray-700 dark:text-gray-300">
                {item.name}
              </dt>
            </div>
            <dd className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </>
  )
}
