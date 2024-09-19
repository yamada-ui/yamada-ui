import { ColorSwatch, HStack, Skeleton, Tooltip } from "@yamada-ui/react"
import type { ColorSwatchProps, SkeletonProps } from "@yamada-ui/react"
import type { FC } from "react"
import { memo } from "react"
import type { CountUpProps } from "components/transitions"
import { CountUp } from "components/transitions"

export interface ScoreLegendProps extends Omit<CountUpProps, "color"> {
  label?: string
  color?: ColorSwatchProps["color"]
  isLoaded?: SkeletonProps["isLoaded"]
  containerProps?: SkeletonProps
}

export const ScoreLegend: FC<ScoreLegendProps> = memo(
  ({ label, color, isLoaded, containerProps, ...rest }) => {
    return (
      <Tooltip label={label}>
        <HStack gap="sm">
          <ColorSwatch color={color} boxSize="3" isRounded />

          <Skeleton
            isLoaded={isLoaded}
            minW="2.5ch"
            textAlign="right"
            rounded="md"
            fontSize="sm"
            {...containerProps}
          >
            <CountUp {...rest} />
          </Skeleton>
        </HStack>
      </Tooltip>
    )
  },
)

ScoreLegend.displayName = "ScoreLegend"
