import { render, screen } from "#test"
import { PieChart } from "."

interface Data {
  browser: string
  downloads: number
  visits: number
}

const rootData: Data[] = [
  { browser: "chrome", downloads: 1200, visits: 2200 },
  { browser: "edge", downloads: 900, visits: 1800 },
]

const childData: Data[] = [
  { browser: "safari", downloads: 1600, visits: 2400 },
  { browser: "opera", downloads: 700, visits: 1300 },
]

const responsiveContainerProps = { height: 400, width: 400 } as NonNullable<
  Parameters<typeof PieChart.Root>[0]["responsiveContainerProps"]
>

describe("<PieChart />", () => {
  test("sets `displayName` correctly", () => {
    expect(PieChart.Root.displayName).toBe("PieChart")
  })

  test("renders generated pies from `series`", () => {
    render(
      <PieChart.Root
        data-testid="root"
        data={rootData}
        series={[{ dataKey: "visits", nameKey: "browser" }]}
        withLegend
        responsiveContainerProps={responsiveContainerProps}
      />,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-pie-chart")
    expect(screen.getByText("chrome")).toBeInTheDocument()
    expect(screen.getByText("edge")).toBeInTheDocument()
  })

  test("renders composition components instead of fallback `series`", () => {
    render(
      <PieChart.Root
        data-testid="root"
        responsiveContainerProps={responsiveContainerProps}
      >
        <PieChart.Pie data={childData} dataKey="downloads" nameKey="browser" />
        <PieChart.Legend />
      </PieChart.Root>,
    )

    expect(screen.getByText("safari")).toBeInTheDocument()
    expect(screen.getByText("opera")).toBeInTheDocument()
    expect(screen.queryByText("chrome")).not.toBeInTheDocument()
    expect(screen.queryByText("edge")).not.toBeInTheDocument()
  })
})
