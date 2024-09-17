import {
  HStack,
  Spacer,
  useColorMode,
  MenuButton,
  IconButton,
  Menu,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  IconButtonProps,
  MenuProps,
  Popover,
  PopoverTrigger,
  useDisclosure,
  useTheme,
  PopoverContent,
  PopoverBody,
  Box,
  PopoverProps,
  Center,
  CenterProps,
  useScroll,
  useMotionValueEvent,
  Image,
  ColorModeWithSystem,
} from "@yamada-ui/react"
import { Moon, Palette, Sun } from "@yamada-ui/lucide"
import { useRef } from "react"
import { useState } from "react"
import { memo } from "react"
import { FC } from "react"

export interface HeaderProps extends CenterProps {}

export const Header: FC<HeaderProps> = ({ ...rest }) => {
  const ref = useRef<HTMLHeadingElement>()
  const { scrollY } = useScroll()
  const [y, setY] = useState<number>(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  useMotionValueEvent(scrollY, "change", setY)

  const isScroll = y > height

  return (
    <Center
      ref={ref}
      as="header"
      w="full"
      bg={isScroll ? ["whiteAlpha.500", "blackAlpha.200"] : undefined}
      backdropFilter="auto"
      backdropSaturate="180%"
      backdropBlur="10px"
      shadow={isScroll ? ["base", "dark-sm"] : undefined}
      transitionProperty="common"
      transitionDuration="slower"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="guldo"
      {...rest}
    >
      <HStack w="full" maxW="9xl" py="3" px={{ base: "lg", md: "md" }}>
        <Box
          as="a"
          href="/"
          aria-label="Yamada UI"
          _hover={{ opacity: 0.7 }}
          transitionProperty="opacity"
          transitionDuration="slower"
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "outline" }}
          rounded="md"
        >
          <Image
            src="/logo-black.png"
            alt="Yamada UI"
            w="auto"
            h={{ base: "10", sm: "8" }}
            _dark={{ display: "none" }}
          />
          <Image
            src="/logo-white.png"
            alt="Yamada UI"
            w="auto"
            h={{ base: "10", sm: "8" }}
            _light={{ display: "none" }}
          />
        </Box>

        <Spacer />

        <HStack>
          <ThemeSchemeButton />
          <ColorModeButton />
        </HStack>
      </HStack>
    </Center>
  )
}

type ColorModeButtonProps = IconButtonProps & {
  menuProps?: MenuProps
}

const ColorModeButton: FC<ColorModeButtonProps> = memo(
  ({ menuProps, ...rest }) => {
    const { colorMode, internalColorMode, changeColorMode } = useColorMode()

    return (
      <Menu
        restoreFocus={false}
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: {
                top: 32,
                bottom: 32,
                left: 32,
                right: 32,
              },
            },
          },
        ]}
        {...menuProps}
      >
        <MenuButton
          as={IconButton}
          aria-label="Open color mode switching menu"
          variant="ghost"
          colorScheme="gray"
          color="muted"
          icon={
            colorMode === "dark" ? (
              <Sun fontSize="2xl" />
            ) : (
              <Moon fontSize="2xl" />
            )
          }
          {...rest}
        />

        <MenuList>
          <MenuOptionGroup<ColorModeWithSystem>
            value={internalColorMode}
            onChange={changeColorMode}
            type="radio"
          >
            <MenuOptionItem value="light" closeOnSelect>
              Light
            </MenuOptionItem>
            <MenuOptionItem value="dark" closeOnSelect>
              Dark
            </MenuOptionItem>
            <MenuOptionItem value="system" closeOnSelect>
              System
            </MenuOptionItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    )
  },
)

ColorModeButton.displayName = "ColorModeButton"

type ThemeSchemeButtonProps = IconButtonProps & {
  popoverProps?: PopoverProps
}

const ThemeSchemeButton: FC<ThemeSchemeButtonProps> = memo(
  ({ popoverProps, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { theme, changeThemeScheme } = useTheme()
    const { colorSchemes = [] } = theme

    return (
      <Popover
        {...popoverProps}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        closeOnButton={false}
        restoreFocus={false}
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: {
                top: 32,
                bottom: 32,
                left: 32,
                right: 32,
              },
            },
          },
        ]}
      >
        <PopoverTrigger>
          <IconButton
            aria-label="Open color mode switching menu"
            variant="ghost"
            colorScheme="gray"
            color="muted"
            icon={<Palette fontSize="2xl" />}
            {...rest}
          />
        </PopoverTrigger>

        <PopoverContent>
          <PopoverBody
            display="grid"
            gridTemplateColumns={{ base: "repeat(4, 1fr)" }}
          >
            {colorSchemes.map((colorScheme: string) => (
              <Box
                as="button"
                type="button"
                key={colorScheme}
                bg={`${colorScheme}.500`}
                minW={{ base: "12", md: "10" }}
                minH={{ base: "12", md: "10" }}
                rounded="md"
                boxShadow="inner"
                outline="0"
                _hover={{ bg: `${colorScheme}.600` }}
                _active={{ bg: `${colorScheme}.700` }}
                _focusVisible={{ shadow: "outline" }}
                transitionProperty="common"
                transitionDuration="slower"
                onClick={() => {
                  changeThemeScheme(colorScheme)
                  onClose()
                }}
              />
            ))}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  },
)

ThemeSchemeButton.displayName = "ThemeSchemeButton"
