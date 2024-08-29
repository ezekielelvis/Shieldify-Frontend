"use client"

import { useAnalysis } from "@/context/AnalysisContext"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

export function DashboardChartComposition() {
  const { analysisData } = useAnalysis()

  console.log("DashboardDounutChart - Analysis Data:", analysisData)

  if (!analysisData || !analysisData.sandbox?.analysis_result?.metrics) {
    console.log("DashboardDounutChart - No metrics data available")
    return <div>No data available</div>
  }

  const metrics = analysisData.sandbox.analysis_result.metrics || {}
  console.log("DashboardDounutChart - Metrics:", metrics)

  const chartData = [
    { name: "Open Issues", value: parseInt(metrics.open_issues) || 0 },
    { name: "Functions", value: parseInt(metrics.functions) || 0 },
    { name: "Complexity", value: parseInt(metrics.complexity) || 0 },
    { name: "Files", value: parseInt(metrics.files) || 0 },
    { name: "Sqale Index", value: parseInt(metrics.sqale_index) || 0 },
    {
      name: "Cognitive Complexity",
      value: parseInt(metrics.cognitive_complexity) || 0,
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
      <CardHeader>
        <CardTitle>Code Composition</CardTitle>
        <CardDescription>
          Lines of Code, Functions, Complexity, and Files
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-desktop)" radius={8} />
          </BarChart>
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
