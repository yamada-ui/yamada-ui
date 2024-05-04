import {
  HStack,
  Slider,
  Text,
  Tooltip,
  VStack,
  useControllableState,
} from "@yamada-ui/react"
import type { SliderProps, StackProps, TooltipProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"

export type ParameterProps = SliderProps & {
  label: string
  description: string
  labelProps?: StackProps
  tooltipProps?: TooltipProps
  containerProps?: StackProps
}

export const Parameter: FC<ParameterProps> = memo(
  ({
    label,
    description,
    labelProps,
    tooltipProps,
    containerProps,
    value: valueProp,
    defaultValue,
    onChange,
    ...rest
  }) => {
    const [value, setValue] = useControllableState({
      value: valueProp,
      defaultValue,
      onChange,
    })

    return (
      <Tooltip
        label={description}
        placement={{ base: "left", lg: "bottom" }}
        p="md"
        fontSize="md"
        whiteSpace="pre-line"
        gutter={{ base: 16 }}
        {...tooltipProps}
      >
        <VStack gap="sm" {...containerProps}>
          <HStack {...labelProps}>
            <Text fontWeight="medium">{label}</Text>

            <Text ms="auto" color="muted">
              {value}
            </Text>
          </HStack>

          <Slider
            size="lg"
            variant=""
            value={value}
            onChange={setValue}
            {...rest}
          />
        </VStack>
      </Tooltip>
    )
  },
)

Parameter.displayName = "Parameter"
