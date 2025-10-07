import { Card, Heading } from "@yamada-ui/react"
import { memo } from "react"

export interface OverviewProps extends Card.RootProps {}

export const Overview = memo<OverviewProps>(({ ...rest }) => {
  // const data = useMemo(
  //   () => [
  //     { month: "Jan", value: 3750 },
  //     { month: "Feb", value: 5250 },
  //     { month: "Mar", value: 2250 },
  //     { month: "Apr", value: 2000 },
  //     { month: "May", value: 4500 },
  //     { month: "Jun", value: 3100 },
  //     { month: "Jul", value: 5900 },
  //     { month: "Aug", value: 2250 },
  //     { month: "Sep", value: 6000 },
  //     { month: "Oct", value: 3750 },
  //     { month: "Nov", value: 3700 },
  //     { month: "Dec", value: 1500 },
  //   ],
  //   [],
  // )

  // const series = useMemo<BarProps[]>(
  //   () => [
  //     { color: ["black", "white"], dataKey: "value", radius: [4, 4, 0, 0] },
  //   ],
  //   [],
  // )

  return (
    <Card.Root variant="outline" {...rest}>
      <Card.Header alignItems="flex-start" gap="0">
        <Heading as="h4" size="md">
          Overview
        </Heading>
      </Card.Header>

      <Card.Body>
        {/* <BarChart
          data={data}
          dataKey="month"
          gridAxis="none"
          series={series}
          valueFormatter={(value) =>
            isNumber(value) ? `$${value}` : `${value}`
          }
          withTooltip={false}
        /> */}
      </Card.Body>
    </Card.Root>
  )
})

Overview.displayName = "Overview"
