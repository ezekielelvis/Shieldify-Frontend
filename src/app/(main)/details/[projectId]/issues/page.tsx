"use client"
import { useAnalysis } from "@/context/AnalysisContext"
import { motion } from "framer-motion"
import { Suspense } from "react"

const IssuePageContent = () => {
  const { analysisData } = useAnalysis()

  console.log("IssuePage - Analysis Data:", analysisData)

  if (!analysisData || !analysisData.sandbox?.analysis_result?.issues) {
    console.log("IssuePage - No issues data available")
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

  const issues = analysisData.sandbox.analysis_result.issues.issues || []
  console.log("IssuePage - Issues:", issues)

  return (
    <>
      {issues.map((issue: any, index: number) => (
        <motion.div
          className="mockup-code my-5 shadow-lg"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <pre data-prefix="$">
            <code>line: {issue.line}</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>Message: {issue.message}</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Component: {issue.component}</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Severity: {issue.severity}</code>
          </pre>
        </motion.div>
      ))}
    </>
  )
}

const IssuePage = () => {
  return (
    <Suspense fallback={<div>Loading Issues...</div>}>
      <IssuePageContent />
    </Suspense>
  )
}

export default IssuePage
