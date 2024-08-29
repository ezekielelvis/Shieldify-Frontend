"use client"
import { useAnalysis } from "@/context/AnalysisContext"
import { motion } from "framer-motion"
import { Suspense } from "react"

const HotspotPageContent = () => {
  const { analysisData } = useAnalysis()

  console.log("HotspotPage - Analysis Data:", analysisData)

  if (!analysisData || !analysisData.sandbox?.analysis_result?.hotspots) {
    console.log("HotspotPage - No hotspots data available")
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex h-[60vh] w-full items-center justify-center px-5"
      >
        <div className="no-test flex flex-col items-center justify-center rounded-lg border border-dashed px-40 py-20 shadow-lg">
          <h2 className="my-4 text-2xl">No Test Yet</h2>
          <p>Please run an analysis from the repository details page.</p>
        </div>
      </motion.div>
    )
  }

  const hotspots = analysisData.sandbox.analysis_result.hotspots.hotspots || []
  console.log("HotspotPage - Hotspots:", hotspots)

  return (
    <>
      {hotspots.map((hotspot: any, index: number) => (
        <motion.div
          className="mockup-code my-5 shadow-lg"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <pre data-prefix="">
            <code>Line: {hotspot.line}</code>
          </pre>
          <pre data-prefix="">
            <code>Message: {hotspot.message}</code>
          </pre>
          <pre data-prefix="">
            <code>Component: {hotspot.component}</code>
          </pre>
          <pre data-prefix="">
            <code>Status: {hotspot.status}</code>
          </pre>
          <pre data-prefix="" className="bg-warning text-warning-content">
            <code>
              Vulnerability Probability: {hotspot.vulnerabilityProbability}
            </code>
          </pre>
        </motion.div>
      ))}
    </>
  )
}

const HotspotPage = () => {
  return (
    <Suspense fallback={<div>Loading Hotspots...</div>}>
      <HotspotPageContent />
    </Suspense>
  )
}

export default HotspotPage
