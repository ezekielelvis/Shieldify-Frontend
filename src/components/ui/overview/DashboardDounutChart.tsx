"use client"

import { useAnalysis } from "@/context/AnalysisContext"
import { Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

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

export function DashboardDounutChart() {
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
      name: "Classes",
      value: parseInt(metrics.classes) || 0,
      fill: "hsl(var(--chart-1))",
    },
    {
      name: "Vulnerabilities",
      value: parseInt(metrics.vulnerabilities) || 0,
      fill: "hsl(var(--chart-2))",
    },
    {
      name: "Confirmed Issues",
      value: parseInt(metrics.confirmed_issues) || 0,
      fill: "hsl(var(--chart-3))",
    },
    {
      name: "Security Hotspots",
      value: parseInt(metrics.security_hotspots) || 0,
      fill: "hsl(var(--chart-4))",
    },
  ]

  const chartConfig = {
    bugs: {
      label: "Classes",
      color: "hsl(var(--chart-1))",
    },
    vulnerabilities: {
      label: "Vulnerabilities",
      color: "hsl(var(--chart-2))",
    },
    code_smells: {
      label: "Confirmed Issues",
      color: "hsl(var(--chart-3))",
    },
    security_hotspots: {
      label: "Security Hotspots",
      color: "hsl(var(--chart-4))",
    },
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Issues Distribution</CardTitle>
        <CardDescription>
          Classes, Vulnerabilities, Confirmed Issues, and Security Hotspots
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
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
