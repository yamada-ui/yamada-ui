import type { SliderProps, StackProps, TooltipProps } from "@yamada-ui/react"
import type { FC } from "react"
import {
  HStack,
  Slider,
  Text,
  Tooltip,
  useControllableState,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"

export interface ParameterProps extends SliderProps {
  description: string
  label: string
  containerProps?: StackProps
  labelProps?: StackProps
  tooltipProps?: TooltipProps
}

export const Parameter: FC<ParameterProps> = memo(
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
        fontSize="md"
        gutter={{ base: 16 }}
        label={description}
        p="md"
        placement={{ base: "left", lg: "bottom" }}
        whiteSpace="pre-line"
        {...tooltipProps}
      >
        <VStack gap="sm" {...containerProps}>
          <HStack {...labelProps}>
            <Text fontWeight="medium">{label}</Text>

            <Text color="muted" ms="auto">
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
