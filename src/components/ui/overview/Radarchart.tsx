"use client"

import { useAnalysis } from "@/context/AnalysisContext"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/charts"

export function Radarchart() {
  const { analysisData } = useAnalysis()

  console.log("DashboardDounutChart - Analysis Data:", analysisData)

  if (!analysisData || !analysisData.sandbox?.analysis_result?.metrics) {
    console.log("DashboardDounutChart - No metrics data available")
    return <div>No data available</div>
  }

  const metrics = analysisData.sandbox.analysis_result.metrics || {}
  console.log("DashboardDounutChart - Metrics:", metrics)

  const chartData = [
    {
      metric: "Lines to cover",
      value: parseFloat(metrics.lines_to_cover) || 0,
    },
    {
      metric: "Uncovered Lines",
      value: parseFloat(metrics.uncovered_lines) || 0,
    },
    {
      metric: "Line Coverage",
      value: parseFloat(metrics.line_coverage) || 0,
    },
    { metric: "Coverage", value: parseFloat(metrics.coverage) || 0 },
    {
      metric: "Duplication",
      value: parseFloat(metrics.duplicated_lines_density) || 0,
    },
    {
      metric: "False Positive Issues",
      value: parseFloat(metrics.false_positive_issues) || 0,
    },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Quality Radar</CardTitle>
        <CardDescription>Overview of key quality metrics</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarGrid
              className="fill-[--color-desktop] opacity-20"
              gridType="circle"
            />
            <PolarAngleAxis dataKey="metric" />
            <Radar
              dataKey="value"
              fill="var(--color-desktop)"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Overall Quality Gate:{" "}
          {analysisData.sandbox?.analysis_result?.qualityGate.status || "N/A"}
        </div>
      </CardFooter>
    </Card>
  )
}
