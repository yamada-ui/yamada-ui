import type { ColorSwatchProps, SkeletonProps } from "@yamada-ui/react"
import type { CountUpProps } from "components/transitions"
import type { FC } from "react"
import { ColorSwatch, HStack, Skeleton, Tooltip } from "@yamada-ui/react"
import { CountUp } from "components/transitions"
import { memo } from "react"

export interface ScoreLegendProps extends Omit<CountUpProps, "color"> {
  color?: ColorSwatchProps["color"]
  isLoaded?: SkeletonProps["isLoaded"]
  label?: string
  containerProps?: SkeletonProps
}

export const ScoreLegend: FC<ScoreLegendProps> = memo(
  ({ color, isLoaded, label, containerProps, ...rest }) => {
    return (
      <Tooltip label={label}>
        <HStack gap="sm">
          <ColorSwatch boxSize="3" color={color} isRounded />

          <Skeleton
            fontSize="sm"
            isLoaded={isLoaded}
            minW="2.5ch"
            rounded="md"
            textAlign="right"
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
