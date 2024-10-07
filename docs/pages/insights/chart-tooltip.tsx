import type { ChartTooltipProps as OriginChartTooltipProps } from "@yamada-ui/charts"
import type { FC } from "react"
import { Box, HStack, isArray, Text, VStack } from "@yamada-ui/react"
import { useI18n } from "contexts"
import { useInsights } from "./insights-provider"
import { labelFormatter } from "./insights-utils"

export interface ChartTooltipProps extends OriginChartTooltipProps {}

export const ChartTooltip: FC<ChartTooltipProps> = ({
  label,
  payload = [],
}) => {
  const { period } = useInsights()
  const { locale, t } = useI18n()

  const total = payload.reduce(
    (acc, { value }) => (!isArray(value) ? acc + Number(value) : 0),
    0,
  )

  return (
    <VStack
      bg={["white", "black"]}
      border="1px solid"
      borderColor={["blackAlpha.200", "whiteAlpha.100"]}
      boxShadow={["md", "dark-md"]}
      color="inherit"
      fontSize="sm"
      fontWeight="medium"
      gap="sm"
      maxW="64"
      minW="56"
      p="3"
      rounded="md"
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
        {payload.map(({ name, color, value }, index) => {
          return (
            <HStack key={index} gap="sm">
              <Box bg={color} boxSize="3" rounded="full" />

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
