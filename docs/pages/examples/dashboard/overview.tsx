import { BarChart } from "@yamada-ui/charts"
import { Card, CardBody, CardHeader, Heading } from "@yamada-ui/react"
import { memo, useMemo } from "react"

export const Overview = memo(() => {
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

  return (
    <Card
      breakInside="avoid"
      ml={{ base: "lg", sm: "md" }}
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader alignItems="flex-start" gap="0">
        <Heading as="h2" size="md">
          Overview
        </Heading>
      </CardHeader>

      <CardBody>
        <BarChart
          width={600}
          height={450}
          data={data}
          dataKey="month"
          series={[{ dataKey: "value", color: "black.500" }]}
          unit="$"
          withTooltip={false}
        ></BarChart>
      </CardBody>
    </Card>
  )
})

Overview.displayName = "Overview"
