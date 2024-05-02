import { BarChart } from "@yamada-ui/charts"
import type { BarProps } from "@yamada-ui/charts"
import { Card, CardBody, CardHeader, Heading, isNumber } from "@yamada-ui/react"
import type { CardProps } from "@yamada-ui/react"
import { memo, useMemo } from "react"
import type { FC } from "react"

export type OverviewProps = CardProps

export const Overview: FC<OverviewProps> = memo(({ ...rest }) => {
  const data = useMemo(
    () => [
      { month: "Jan", value: 3750 },
      { month: "Feb", value: 5250 },
      { month: "Mar", value: 2250 },
      { month: "Apr", value: 2000 },
      { month: "May", value: 4500 },
      { month: "Jun", value: 3100 },
      { month: "Jul", value: 5900 },
      { month: "Aug", value: 2250 },
      { month: "Sep", value: 6000 },
      { month: "Oct", value: 3750 },
      { month: "Nov", value: 3700 },
      { month: "Dec", value: 1500 },
    ],
    [],
  )

  const series = useMemo<BarProps[]>(
    () => [
      { dataKey: "value", color: ["black", "white"], radius: [4, 4, 0, 0] },
    ],
    [],
  )

  return (
    <Card variant="outline" {...rest}>
      <CardHeader alignItems="flex-start" gap="0">
        <Heading as="h4" size="md">
          Overview
        </Heading>
      </CardHeader>

      <CardBody>
        <BarChart
          data={data}
          series={series}
          dataKey="month"
          withTooltip={false}
          valueFormatter={(value) =>
            isNumber(value) ? `$${value}` : `${value}`
          }
          gridAxis="none"
        />
      </CardBody>
    </Card>
  )
})

Overview.displayName = "Overview"
