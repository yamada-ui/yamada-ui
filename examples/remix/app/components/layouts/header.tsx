import type {
  CenterProps,
  ColorModeWithSystem,
  IconButtonProps,
  MenuProps,
  PopoverProps,
} from "@yamada-ui/react"
import type { FC } from "react"
import { Moon, Palette, Sun } from "@yamada-ui/lucide"
import {
  Box,
  Center,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  useColorMode,
  useDisclosure,
  useMotionValueEvent,
  useScroll,
  useTheme,
} from "@yamada-ui/react"
import { memo, useRef, useState } from "react"

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
      backdropBlur="10px"
      backdropFilter="auto"
      backdropSaturate="180%"
      bg={isScroll ? ["whiteAlpha.500", "blackAlpha.200"] : undefined}
      left="0"
      position="sticky"
      right="0"
      shadow={isScroll ? ["base", "dark-sm"] : undefined}
      top="0"
      transitionDuration="slower"
      transitionProperty="common"
      w="full"
      zIndex="guldo"
      {...rest}
    >
      <HStack maxW="9xl" px={{ base: "lg", md: "md" }} py="3" w="full">
        <Box
          as="a"
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "outline" }}
          _hover={{ opacity: 0.7 }}
          href="/"
          rounded="md"
          transitionDuration="slower"
          transitionProperty="opacity"
          aria-label="Yamada UI"
        >
          <Image
            _dark={{ display: "none" }}
            alt="Yamada UI"
            h={{ base: "10", sm: "8" }}
            src="/logo-black.png"
            w="auto"
          />
          <Image
            _light={{ display: "none" }}
            alt="Yamada UI"
            h={{ base: "10", sm: "8" }}
            src="/logo-white.png"
            w="auto"
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

type ColorModeButtonProps = {
  menuProps?: MenuProps
} & IconButtonProps

const ColorModeButton: FC<ColorModeButtonProps> = memo(
  ({ menuProps, ...rest }) => {
    const { changeColorMode, colorMode, internalColorMode } = useColorMode()

    return (
      <Menu
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: {
                bottom: 32,
                left: 32,
                right: 32,
                top: 32,
              },
            },
          },
        ]}
        restoreFocus={false}
        {...menuProps}
      >
        <MenuButton
          as={IconButton}
          color="muted"
          colorScheme="gray"
          icon={
            colorMode === "dark" ? (
              <Sun fontSize="2xl" />
            ) : (
              <Moon fontSize="2xl" />
            )
          }
          variant="ghost"
          aria-label="Open color mode switching menu"
          {...rest}
        />

        <MenuList>
          <MenuOptionGroup<ColorModeWithSystem>
            type="radio"
            value={internalColorMode}
            onChange={changeColorMode}
          >
            <MenuOptionItem closeOnSelect value="light">
              Light
            </MenuOptionItem>
            <MenuOptionItem closeOnSelect value="dark">
              Dark
            </MenuOptionItem>
            <MenuOptionItem closeOnSelect value="system">
              System
            </MenuOptionItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    )
  },
)

ColorModeButton.displayName = "ColorModeButton"

type ThemeSchemeButtonProps = {
  popoverProps?: PopoverProps
} & IconButtonProps

const ThemeSchemeButton: FC<ThemeSchemeButtonProps> = memo(
  ({ popoverProps, ...rest }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { changeThemeScheme, theme } = useTheme()
    const { colorSchemes = [] } = theme

    return (
      <Popover
        {...popoverProps}
        closeOnButton={false}
        isOpen={isOpen}
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: {
                bottom: 32,
                left: 32,
                right: 32,
                top: 32,
              },
            },
          },
        ]}
        restoreFocus={false}
        onClose={onClose}
        onOpen={onOpen}
      >
        <PopoverTrigger>
          <IconButton
            color="muted"
            colorScheme="gray"
            icon={<Palette fontSize="2xl" />}
            variant="ghost"
            aria-label="Open color mode switching menu"
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
                key={colorScheme}
                as="button"
                type="button"
                _active={{ bg: `${colorScheme}.700` }}
                _focusVisible={{ shadow: "outline" }}
                _hover={{ bg: `${colorScheme}.600` }}
                bg={`${colorScheme}.500`}
                boxShadow="inner"
                minH={{ base: "12", md: "10" }}
                minW={{ base: "12", md: "10" }}
                outline="0"
                rounded="md"
                transitionDuration="slower"
                transitionProperty="common"
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
