import type { defaultTheme, GridProps, StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import {
  Box,
  Grid,
  HStack,
  Text,
  useTheme,
  useToken,
  useValue,
  VStack,
} from "@yamada-ui/react"

export interface ColorPaletterProps extends Omit<StackProps, "color"> {
  color: string
  label: string
}

export const ColorPaletter: FC<ColorPaletterProps> = ({
  color,
  label,
  ...rest
}) => {
  if (!label) label = color

  const value = useToken("colors", color)
  const computedValue = useValue(value)

  return (
    <HStack {...rest}>
      <Box bg={color} boxShadow="inner" minH="12" minW="12" rounded="md" />

      <VStack gap="1">
        <Text fontWeight="semibold" lineClamp={1} textTransform="capitalize">
          {label}
        </Text>
        <Text color="muted" lineClamp={1}>
          {computedValue}
        </Text>
      </VStack>
    </HStack>
  )
}

export interface ColorPalettersProps
  extends Omit<ColorPaletterContainerProps, "color"> {
  colorScheme: keyof (typeof defaultTheme)["colors"]
}

export const ColorPaletters: FC<ColorPalettersProps> = ({
  colorScheme,
  ...rest
}) => {
  const { theme } = useTheme()

  return (
    <ColorPaletterContainer {...rest}>
      {Object.keys(theme.colors?.[colorScheme] ?? {}).map((tone) => (
        <ColorPaletter
          key={`${colorScheme}.${tone}`}
          color={`${colorScheme}.${tone}`}
          label={`${colorScheme} ${tone}`}
        />
      ))}
    </ColorPaletterContainer>
  )
}

export type ColorPaletterContainerProps = GridProps

export const ColorPaletterContainer: FC<ColorPaletterContainerProps> = ({
  ...rest
}) => {
  return (
    <Grid
      gap="4"
      my="6"
      templateColumns={{
        base: "repeat(3, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      {...rest}
    />
  )
}
