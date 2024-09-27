import type { ChartTooltipProps as OriginChartTooltipProps } from "@yamada-ui/charts"
import { Box, HStack, isArray, Text, VStack } from "@yamada-ui/react"
import type { FC } from "react"
import { useInsights } from "./insights-provider"
import { labelFormatter } from "./insights-utils"
import { useI18n } from "contexts"

export interface ChartTooltipProps extends OriginChartTooltipProps {}

export const ChartTooltip: FC<ChartTooltipProps> = ({
  label,
  payload = [],
}) => {
  const { period } = useInsights()
  const { t, locale } = useI18n()

  const total = payload.reduce(
    (acc, { value }) => (!isArray(value) ? acc + Number(value) : 0),
    0,
  )

  return (
    <VStack
      minW="56"
      gap="sm"
      rounded="md"
      bg={["white", "black"]}
      border="1px solid"
      borderColor={["blackAlpha.200", "whiteAlpha.100"]}
      p="3"
      fontWeight="medium"
      fontSize="sm"
      color="inherit"
      boxShadow={["md", "dark-md"]}
      maxW="64"
      zIndex="dodoria"
    >
      {label ? (
        <Text fontSize="lg">{labelFormatter(label, period)(locale)}</Text>
      ) : null}

      <HStack fontSize="md" gap="sm">
        <Text as="span" color={["blackAlpha.800", "whiteAlpha.700"]}>
          {t("insights.chart.tooltip.total")}
        </Text>

        <Text as="span" flex="1" textAlign="end">
          {total}
        </Text>
      </HStack>

      <VStack gap="xs">
        {payload.map(({ color, name, value }, index) => {
          return (
            <HStack key={index} gap="sm">
              <Box boxSize="3" rounded="full" bg={color} />

              <Text as="span" color={["blackAlpha.800", "whiteAlpha.700"]}>
                {name}
              </Text>

              <Text as="span" flex="1" textAlign="end">
                {value}
              </Text>
            </HStack>
          )
        })}
      </VStack>
    </VStack>
  )
}
