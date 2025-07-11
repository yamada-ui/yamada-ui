import type {
  BoxProps,
  CenterProps,
  ColorModeWithSystem,
  DrawerProps,
  IconButtonProps,
  MenuProps,
  PopoverProps,
  UseDisclosureReturn,
} from "@yamada-ui/react"
import type { FC } from "react"
import {
  LanguagesIcon,
  MenuIcon,
  MoonIcon,
  PaletteIcon,
  SunIcon,
} from "@yamada-ui/lucide"
import {
  Box,
  Center,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  forwardRef,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  mergeRefs,
  noop,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Ripple,
  Spacer,
  Tag,
  useBreakpoint,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useMotionValueEvent,
  useRipple,
  useScroll,
  useTheme,
  VStack,
} from "@yamada-ui/react"
import { Search, SearchButton } from "components/forms"
import { DiscordIcon, GithubIcon } from "components/media-and-icons"
import { NextLinkIconButton, Tree } from "components/navigation"
import { CONSTANT } from "constant"
import { useI18n, usePage } from "contexts"
import Link from "next/link"
import { useRouter } from "next/router"
import { memo, useEffect, useRef, useState } from "react"

export interface HeaderProps extends CenterProps {}

export const Header = memo(
  forwardRef<HeaderProps, "div">(({ ...rest }, ref) => {
    const { currentVersion } = usePage()
    const headerRef = useRef<HTMLHeadingElement>()
    const { scrollY } = useScroll()
    const [y, setY] = useState<number>(0)
    const { open, onClose, onOpen } = useDisclosure()
    const { height = 0 } = headerRef.current?.getBoundingClientRect() ?? {}

    useMotionValueEvent(scrollY, "change", setY)

    const isScroll = y > height

    return (
      <>
        <Center
          ref={mergeRefs(ref, headerRef)}
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
              as={Link}
              href="/"
              aria-label="Yamada UI"
              rounded="md"
              transitionDuration="slower"
              transitionProperty="opacity"
              _focus={{ outline: "none" }}
              _focusVisible={{ boxShadow: "outline" }}
              _hover={{ opacity: 0.7 }}
            >
              <Image
                src="/logo-black.png"
                alt="Yamada UI"
                h={{ base: "10", sm: "8" }}
                w="auto"
                _dark={{ display: "none" }}
              />
              <Image
                src="/logo-white.png"
                alt="Yamada UI"
                h={{ base: "10", sm: "8" }}
                w="auto"
                _light={{ display: "none" }}
              />
            </Box>

            <Tag
              colorScheme="gray"
              bg="transparent"
              borderWidth="1px"
              display={{ base: "inline-flex", md: "none" }}
              letterSpacing="1px"
              minW="auto"
            >
              {currentVersion}
            </Tag>

            <Spacer />

            <Search
              backdropBlur="10px"
              backdropFilter="auto"
              backdropSaturate="180%"
              bg={
                isScroll
                  ? ["whiteAlpha.600", "blackAlpha.500"]
                  : ["white", "black"]
              }
              borderColor={isScroll ? "transparent" : "border"}
              display={{ base: "flex", md: "none" }}
            />

            <ButtonGroup {...{ open, onOpen }} />
          </HStack>
        </Center>

        <MobileMenu open={open} onClose={onClose} />
      </>
    )
  }),
)

interface ButtonGroupProps extends Partial<UseDisclosureReturn> {
  isMobile?: boolean
}

const ButtonGroup: FC<ButtonGroupProps> = memo(
  ({ isMobile, open, onClose, onOpen }) => {
    return (
      <HStack gap="sm">
        <SearchButton
          display={{ base: "none", md: !isMobile ? "inline-flex" : undefined }}
        />

        <NextLinkIconButton
          href={CONSTANT.SNS.DISCORD}
          variant="ghost"
          aria-label="GitHub repository"
          color="muted"
          display={{ base: "inline-flex", lg: !isMobile ? "none" : undefined }}
          icon={<DiscordIcon />}
          isExternal
          _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
        />

        <NextLinkIconButton
          href={CONSTANT.SNS.GITHUB.YAMADA_UI}
          variant="ghost"
          aria-label="Discord server"
          color="muted"
          display={{ base: "inline-flex", lg: !isMobile ? "none" : undefined }}
          icon={<GithubIcon />}
          isExternal
          _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
        />

        <ThemeSchemeButton
          display={{ base: "inline-flex", lg: !isMobile ? "none" : undefined }}
        />

        <I18nButton
          display={{
            base: "inline-flex",
            md: !isMobile ? "none" : undefined,
          }}
        />

        <ColorModeButton />

        {!open ? (
          <IconButton
            variant="ghost"
            aria-label="Open navigation menu"
            color="muted"
            display={{ base: "none", lg: "inline-flex" }}
            icon={<MenuIcon fontSize="2xl" />}
            _hover={{ bg: [`blackAlpha.50`, `whiteAlpha.100`] }}
            onClick={onOpen}
          />
        ) : (
          <CloseButton
            size="lg"
            aria-label="Close navigation menu"
            color="muted"
            display={{ base: "none", lg: "inline-flex" }}
            _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
            onClick={onClose}
          />
        )}
      </HStack>
    )
  },
)

ButtonGroup.displayName = "ButtonGroup"

interface I18nButtonProps extends IconButtonProps {
  menuProps?: MenuProps
}

const I18nButton: FC<I18nButtonProps> = memo(({ menuProps, ...rest }) => {
  const padding = useBreakpointValue({ base: 32, md: 16 })
  const { changeLocale, locale } = useI18n()

  return (
    <Menu
      modifiers={[
        {
          name: "preventOverflow",
          options: {
            padding: {
              bottom: padding,
              left: padding,
              right: padding,
              top: padding,
            },
          },
        },
      ]}
      placement="bottom"
      restoreFocus={false}
      {...menuProps}
    >
      <MenuButton
        as={IconButton}
        variant="ghost"
        aria-label="Open language switching menu"
        color="muted"
        icon={<LanguagesIcon fontSize="2xl" />}
        _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
        {...rest}
      />

      <MenuList>
        <MenuOptionGroup type="radio" value={locale} onChange={changeLocale}>
          {CONSTANT.I18N.LOCALES.map(({ label, value }) => (
            <MenuOptionItem key={value} closeOnSelect value={value}>
              {label}
            </MenuOptionItem>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
})

I18nButton.displayName = "I18nButton"

interface ColorModeButtonProps extends IconButtonProps {
  menuProps?: MenuProps
}

const ColorModeButton: FC<ColorModeButtonProps> = memo(
  ({ menuProps, ...rest }) => {
    const padding = useBreakpointValue({ base: 32, md: 16 })
    const { changeColorMode, colorMode, internalColorMode } = useColorMode()

    return (
      <Menu
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: {
                bottom: padding,
                left: padding,
                right: padding,
                top: padding,
              },
            },
          },
        ]}
        placement="bottom"
        restoreFocus={false}
        {...menuProps}
      >
        <MenuButton
          as={IconButton}
          variant="ghost"
          aria-label="Open color mode switching menu"
          color="muted"
          icon={
            colorMode === "dark" ? (
              <SunIcon fontSize="2xl" />
            ) : (
              <MoonIcon fontSize="2xl" />
            )
          }
          _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
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

interface ThemeSchemeButtonProps extends IconButtonProps {
  popoverProps?: PopoverProps
}

const ThemeSchemeButton: FC<ThemeSchemeButtonProps> = memo(
  ({ popoverProps, ...rest }) => {
    const { open, onClose, onOpen } = useDisclosure()
    const { changeThemeScheme, theme } = useTheme()
    const { colorSchemes = [] } = theme

    return (
      <Popover
        {...popoverProps}
        closeOnButton={false}
        open={open}
        placement="bottom"
        restoreFocus={false}
        onClose={onClose}
        onOpen={onOpen}
      >
        <PopoverTrigger>
          <IconButton
            variant="ghost"
            aria-label="Open color mode switching menu"
            color="muted"
            icon={<PaletteIcon fontSize="2xl" />}
            _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
            {...rest}
          />
        </PopoverTrigger>

        <PopoverContent>
          <PopoverBody
            display="grid"
            gridTemplateColumns={{ base: "repeat(4, 1fr)" }}
          >
            {colorSchemes.map((colorScheme: string) => (
              <ColorButton
                key={colorScheme}
                colorScheme={colorScheme}
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

interface ColorButtonProps extends BoxProps {
  colorScheme: string
}

const ColorButton: FC<ColorButtonProps> = memo(({ colorScheme, ...rest }) => {
  const { onPointerDown, ...rippleProps } = useRipple({})

  return (
    <Box
      as="button"
      type="button"
      bg={`${colorScheme}.500`}
      boxShadow="inner"
      minH={{ base: "12", md: "10" }}
      minW={{ base: "12", md: "10" }}
      outline="0"
      overflow="hidden"
      position="relative"
      rounded="md"
      transitionDuration="slower"
      transitionProperty="common"
      _active={{ bg: `${colorScheme}.700` }}
      _focusVisible={{ shadow: "outline" }}
      _hover={{ bg: `${colorScheme}.600` }}
      {...rest}
      onPointerDown={onPointerDown}
    >
      <Ripple {...rippleProps} />
    </Box>
  )
})

ColorButton.displayName = "ColorButton"

interface MobileMenuProps extends DrawerProps {}

const MobileMenu: FC<MobileMenuProps> = memo(({ open, onClose }) => {
  const { events } = useRouter()
  const breakpoint = useBreakpoint()

  useEffect(() => {
    if (!["lg", "md", "sm"].includes(breakpoint)) onClose?.()
  }, [breakpoint, onClose])

  useEffect(() => {
    events.on("routeChangeComplete", onClose ?? noop)

    return () => {
      events.off("routeChangeComplete", onClose ?? noop)
    }
  }, [events, onClose])

  return (
    <Drawer
      closeOnDrag
      isFullHeight
      open={open}
      w="sm"
      withCloseButton={false}
      withDragBar={false}
      onClose={onClose}
    >
      <DrawerHeader
        fontSize="md"
        fontWeight="normal"
        justifyContent="flex-end"
        pt="sm"
      >
        <ButtonGroup isMobile {...{ open, onClose }} />
      </DrawerHeader>

      <DrawerBody my="sm" position="relative">
        <VStack as="nav" overflowY="auto" overscrollBehavior="contain">
          <Tree py="sm" />
        </VStack>

        <Box
          bgGradient={[
            "linear(to-t, rgba(255, 255, 255, 0), white)",
            "linear(to-t, rgba(0, 0, 0, 0), black)",
          ]}
          h="3"
          left="0"
          position="absolute"
          right="0"
          top="0"
          w="full"
          zIndex="kurillin"
        />
        <Box
          bgGradient={[
            "linear(to-b, rgba(255, 255, 255, 0), white)",
            "linear(to-b, rgba(0, 0, 0, 0), black)",
          ]}
          bottom="0"
          h="3"
          left="0"
          position="absolute"
          right="0"
          w="full"
          zIndex="kurillin"
        />
      </DrawerBody>
    </Drawer>
  )
})

MobileMenu.displayName = "MobileMenu"
