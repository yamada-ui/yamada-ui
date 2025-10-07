import type {
  SliderRootProps,
  StackProps,
  TooltipProps,
} from "@yamada-ui/react"
import {
  HStack,
  Slider,
  Text,
  Tooltip,
  useControllableState,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"

export interface ParameterProps extends Omit<SliderRootProps, "children"> {
  description: string
  label: string
  containerProps?: StackProps
  labelProps?: StackProps
  tooltipProps?: TooltipProps
}

export const Parameter = memo<ParameterProps>(
  ({
    defaultValue,
    description,
    label,
    value: valueProp,
    containerProps,
    labelProps,
    tooltipProps,
    onChange,
    ...rest
  }) => {
    const [value, setValue] = useControllableState({
      defaultValue,
      value: valueProp,
      onChange,
    })

    return (
      <Tooltip
        content={description}
        // fontSize="md"
        gutter={16}
        // p="md"
        // placement={{ base: "left", lg: "bottom" }}
        // whiteSpace="pre-line"
        {...tooltipProps}
      >
        <VStack gap="sm" {...containerProps}>
          <HStack {...labelProps}>
            <Text fontWeight="medium">{label}</Text>

            <Text color="muted" ms="auto">
              {value}
            </Text>
          </HStack>

          <Slider.Root size="lg" value={value} onChange={setValue} {...rest}>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>

            <Slider.Thumb />
          </Slider.Root>
        </VStack>
      </Tooltip>
    )
  },
)

Parameter.displayName = "Parameter"
