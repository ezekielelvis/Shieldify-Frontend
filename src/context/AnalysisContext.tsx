import React, { ReactNode, createContext, useContext, useState } from "react"

interface AnalysisData {
  sandbox?: {
    analysis_result?: {
      issues: any
      metrics: any
      hotspots: any
      qualityGate: any
    }
  }
}

interface AnalysisContextType {
  analysisData: AnalysisData | null
  setAnalysisData: React.Dispatch<React.SetStateAction<AnalysisData | null>>
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(
  undefined,
)

export const AnalysisProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null)

  return (
    <AnalysisContext.Provider value={{ analysisData, setAnalysisData }}>
      {children}
    </AnalysisContext.Provider>
  )
}

export const useAnalysis = () => {
  const context = useContext(AnalysisContext)
  if (context === undefined) {
    throw new Error("useAnalysis must be used within an AnalysisProvider")
  }
  return context
}
