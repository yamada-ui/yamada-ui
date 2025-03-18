import type {
  Dict,
  SegmentedControlProps,
  SelectProps,
  SliderProps,
  StackProps,
  SwitchProps,
  ThemeProps,
} from "@yamada-ui/react"
import type { FC } from "react"
import {
  Box,
  COLOR_SCHEMES,
  FormControl,
  HStack,
  isArray,
  SegmentedControl,
  Select,
  SEMANTIC_COLOR_SCHEMES,
  Slider,
  SliderThumb,
  Switch,
  Text,
  Tooltip,
  useColorMode,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"

export const colorSchemes = [...SEMANTIC_COLOR_SCHEMES, ...COLOR_SCHEMES]

interface ColorPalletsProps {
  name: string
  colors: Dict<Dict>
}

export const ColorPallets: FC<ColorPalletsProps> = ({ name, colors }) => {
  return Object.entries(colors[name] ?? {}).map(([tone, value]) => (
    <ColorPallet key={tone} {...{ name, tone, value }} />
  ))
}

interface ColorPalletProps {
  name: string
  value: string
  tone?: string
}

export const ColorPallet: FC<ColorPalletProps> = ({ name, tone, value }) => {
  const { colorMode } = useColorMode()

  return (
    <HStack key={tone}>
      <Box
        bg={tone ? `${name}.${tone}` : name}
        boxShadow="inner"
        minH="12"
        minW="12"
        rounded="md"
      />
      <VStack gap="1">
        <Text fontWeight="semibold" lineClamp={1} m="0">
          {name.charAt(0).toUpperCase() + name.slice(1)} {tone}
        </Text>
        <Text lineClamp={1} m="0">
          {!isArray(value)
            ? value
            : colorMode === "light"
              ? value[0]
              : value[1]}
        </Text>
      </VStack>
    </HStack>
  )
}

type PropControlComponent = "SegmentedControl" | "Select" | "Slider" | "Switch"

type PropControlItem<K extends PropControlComponent> = {
  label: string
} & (K extends "Select"
  ? SelectProps
  : K extends "SegmentedControl"
    ? SegmentedControlProps
    : K extends "Slider"
      ? SliderProps
      : SwitchProps)

export type PropControlProps<K extends PropControlComponent> = {
  component: K
  items: PropControlItem<K>[]
} & StackProps &
  ThemeProps<K>

export const PropControl = <K extends PropControlComponent = "Switch">({
  colorScheme,
  size,
  variant,
  component,
  items,
  ...rest
}: PropControlProps<K>) => {
  const props = { colorScheme, size, variant }

  return (
    <VStack w="auto" {...rest}>
      {items.map((item, index) => (
        <PropControlItem<K>
          key={index}
          component={component}
          item={{ ...props, ...item }}
        />
      ))}
    </VStack>
  )
}

interface PropControlItemProps<K extends PropControlComponent> {
  component: K
  item: PropControlItem<K>
}

const PropControlItem = <K extends PropControlComponent>({
  component,
  item,
}: PropControlItemProps<K>) => {
  const { label, ...rest } = item
  const { open, onClose, onOpen } = useDisclosure()

  switch (component) {
    case "Select":
      return (
        <FormControl label={label}>
          <Select {...(rest as SelectProps)} />
        </FormControl>
      )

    case "SegmentedControl":
      return (
        <FormControl label={label}>
          <SegmentedControl {...(rest as SegmentedControlProps)} />
        </FormControl>
      )

    case "Slider":
      return (
        <FormControl label={label}>
          <Slider
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            {...(rest as SliderProps)}
          >
            <Tooltip label={rest.value} open={open} placement="top">
              <SliderThumb />
            </Tooltip>
          </Slider>
        </FormControl>
      )

    default:
      return <Switch {...(rest as SwitchProps)}>{label}</Switch>
  }
}
