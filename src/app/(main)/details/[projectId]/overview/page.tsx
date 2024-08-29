"use client"

import { useAnalysis } from "@/context/AnalysisContext"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Suspense, useEffect, useState } from "react"

const DashboardChartComposition = dynamic(
  () =>
    import("@/components/ui/overview/DashboardChartComposition").then(
      (mod) => mod.DashboardChartComposition,
    ),
  { ssr: false, loading: () => <div>Loading Chart Composition...</div> },
)

const DashboardDounutChart = dynamic(
  () =>
    import("@/components/ui/overview/DashboardDounutChart").then(
      (mod) => mod.DashboardDounutChart,
    ),
  { ssr: false, loading: () => <div>Loading Donut Chart...</div> },
)

const Kpicard = dynamic(
  () => import("@/components/ui/overview/Kpicard").then((mod) => mod.Kpicard),
  { ssr: false, loading: () => <div>Loading KPI Card...</div> },
)

const DashboardFilterbar = dynamic(
  () =>
    import("@/components/ui/overview/DashboardFilterbar").then(
      (mod) => mod.DashboardFilterbar,
    ),
  { ssr: false, loading: () => <div>Loading Filter Bar...</div> },
)

const Radarchart = dynamic(
  () =>
    import("@/components/ui/overview/Radarchart").then((mod) => mod.Radarchart),
  { ssr: false, loading: () => <div>Loading Radar Chart...</div> },
)

const Page = () => {
  const [hasAnalysisData, setHasAnalysisData] = useState(false)
  const { analysisData } = useAnalysis()

  useEffect(() => {
    console.log("Current analysis data:", analysisData)
    setHasAnalysisData(
      !!analysisData && !!analysisData.sandbox?.analysis_result,
    )
  }, [analysisData])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="my-5 px-4 md:px-6 lg:px-8">
      <div
        className={`${
          !hasAnalysisData ? "block" : "hidden"
        } flex h-[60vh] w-full items-center justify-center`}
      >
        <motion.div
          className="no-test flex flex-col items-center justify-center rounded-lg border border-dashed bg-white px-8 py-12 shadow-lg md:px-20 md:py-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="my-4 text-2xl font-semibold">No Test Yet</h2>
          <p className="text-center text-gray-600">
            Please run an analysis from the repository details page.
          </p>
        </motion.div>
      </div>
      <motion.div
        className={`container mx-auto ${hasAnalysisData ? "block" : "hidden"}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Suspense
          fallback={
            <div className="py-8 text-center">Loading page content...</div>
          }
        >
          <motion.div className="mb-5" variants={itemVariants}>
            <Kpicard />
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <motion.div
              className="overflow-hidden rounded-lg bg-white shadow-lg"
              variants={itemVariants}
            >
              <DashboardDounutChart />
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-lg bg-white shadow-lg"
              variants={itemVariants}
            >
              <DashboardChartComposition />
            </motion.div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <motion.div
              className="overflow-hidden rounded-lg bg-white shadow-lg"
              variants={itemVariants}
            >
              <DashboardFilterbar />
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-lg bg-white shadow-lg"
              variants={itemVariants}
            >
              <Radarchart />
            </motion.div>
          </div>
        </Suspense>
      </motion.div>
    </div>
  )
}

export default Page
