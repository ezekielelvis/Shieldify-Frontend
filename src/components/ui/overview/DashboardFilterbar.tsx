"use client"

import { useAnalysis } from "@/context/AnalysisContext"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/charts"

export function DashboardFilterbar() {
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
      name: "Reliability",
      value: parseFloat(metrics.reliability_rating) || 0,
    },
    {
      name: "Security",
      value: parseFloat(metrics.security_rating) || 0,
    },
    {
      name: "Security Review",
      value: parseFloat(metrics.security_review_rating) || 0,
    },
    {
      name: "Comment Density",
      value: parseFloat(metrics.comment_lines_density) || 0,
    },
    {
      name: "Duplication",
      value: parseFloat(metrics.duplicated_lines_density) || 0,
    },
    {
      name: "Maintainability Ratio",
      value: parseFloat(metrics.sqale_debt_ratio) || 0,
    },
    {
      name: "Security Recommendation",
      value: parseFloat(metrics.security_remediation_effort) || 0,
    },
    {
      name: "Reliability Recommendation",
      value: parseFloat(metrics.reliability_remediation_effort) || 0,
    },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quality Metrics And Densities</CardTitle>
        <CardDescription>Key quality indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="value"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
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
