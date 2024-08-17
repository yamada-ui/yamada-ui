import type {
  ContainerProps,
  Dict,
  SegmentedControlProps,
  SelectProps,
  SliderProps,
  StackProps,
  SwitchProps,
  ThemeProps,
} from "@yamada-ui/react"
import {
  Box,
  Container,
  FormControl,
  HStack,
  SEMANTIC_COLOR_SCHEMES,
  COLOR_SCHEMES,
  SegmentedControl,
  Select,
  Slider,
  SliderThumb,
  Switch,
  Text,
  Tooltip,
  UIProvider,
  VStack,
  isArray,
  useColorMode,
  useDisclosure,
} from "@yamada-ui/react"
import type { FC, ReactNode } from "react"
import { useEffect } from "react"
import { useDarkMode } from "storybook-dark-mode"

export const colorSchemes = [...SEMANTIC_COLOR_SCHEMES, ...COLOR_SCHEMES]

export const JSX: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <App>{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ children }) => {
  const { changeColorMode } = useColorMode()

  const colorMode = useDarkMode() ? "dark" : "light"

  useEffect(() => {
    changeColorMode(colorMode)
  }, [colorMode, changeColorMode])

  return <Container>{children}</Container>
}

type ColorPalletsProps = {
  name: string
  colors: Dict<Dict>
}

export const ColorPallets: FC<ColorPalletsProps> = ({ name, colors }) => {
  return Object.entries(colors[name]).map(([hue, value]) => (
    <ColorPallet key={hue} {...{ name, hue, value }} />
  ))
}

type ColorPalletProps = {
  name: string
  value: string
  hue?: string
}

export const ColorPallet: FC<ColorPalletProps> = ({ name, hue, value }) => {
  const colorMode = useDarkMode() ? "dark" : "light"

  return (
    <HStack key={hue}>
      <Box
        bg={hue ? `${name}.${hue}` : name}
        minW="12"
        minH="12"
        rounded="md"
        boxShadow="inner"
      />
      <VStack gap="1">
        <Text m="0" fontWeight="semibold" lineClamp={1}>
          {name.charAt(0).toUpperCase() + name.slice(1)} {hue}
        </Text>
        <Text m="0" lineClamp={1}>
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

type PropControlComponent = "Select" | "SegmentedControl" | "Slider" | "Switch"

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
  component,
  variant,
  size,
  colorScheme,
  items,
  ...rest
}: PropControlProps<K>) => {
  const props = { variant, size, colorScheme }

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

type PropControlItemProps<K extends PropControlComponent> = {
  component: K
  item: PropControlItem<K>
}

const PropControlItem = <K extends PropControlComponent>({
  component,
  item,
}: PropControlItemProps<K>) => {
  const { label, ...rest } = item
  const { isOpen, onOpen, onClose } = useDisclosure()

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
            <Tooltip placement="top" label={rest.value} isOpen={isOpen}>
              <SliderThumb />
            </Tooltip>
          </Slider>
        </FormControl>
      )

    default:
      return <Switch {...(rest as SwitchProps)}>{label}</Switch>
  }
}
