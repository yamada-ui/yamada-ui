import {
  Box,
  Grid,
  GridProps,
  HStack,
  StackProps,
  Text,
  VStack,
  defaultTheme,
  useTheme,
  useToken,
  useValue,
} from '@yamada-ui/react'
import { FC } from 'react'

export type ColorPaletterProps = Omit<StackProps, 'color'> & {
  color: string
  label: string
}

export const ColorPaletter: FC<ColorPaletterProps> = ({ label, color, ...rest }) => {
  if (!label) label = color

  const value = useToken('colors', color)
  const computedValue = useValue(value)

  return (
    <HStack {...rest}>
      <Box bg={color} minW='12' minH='12' rounded='md' boxShadow='inner' />

      <VStack gap='1'>
        <Text fontWeight='semibold' noOfLines={1} textTransform='capitalize'>
          {label}
        </Text>
        <Text noOfLines={1} color='muted'>
          {computedValue}
        </Text>
      </VStack>
    </HStack>
  )
}

export type ColorPalettersProps = Omit<ColorPaletterContainerProps, 'color'> & {
  colorScheme: keyof (typeof defaultTheme)['colors']
}

export const ColorPaletters: FC<ColorPalettersProps> = ({ colorScheme, ...rest }) => {
  const { theme } = useTheme()

  return (
    <ColorPaletterContainer {...rest}>
      {Object.keys(theme.colors[colorScheme]).map((hue) => (
        <ColorPaletter
          key={`${colorScheme}.${hue}`}
          label={`${colorScheme} ${hue}`}
          color={`${colorScheme}.${hue}`}
        />
      ))}
    </ColorPaletterContainer>
  )
}

export type ColorPaletterContainerProps = GridProps

export const ColorPaletterContainer: FC<ColorPaletterContainerProps> = ({ ...rest }) => {
  return (
    <Grid my='6' templateColumns='repeat( auto-fit, minmax(200px, 1fr) )' gap='4' {...rest}></Grid>
  )
}
