import {
  Box,
  Center,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
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
  Ripple,
  Spacer,
  Tag,
  VStack,
  forwardRef,
  mergeRefs,
  noop,
  useBreakpoint,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useMotionValueEvent,
  useRipple,
  useScroll,
  useTheme,
} from "@yamada-ui/react"
import type {
  BoxProps,
  CenterProps,
  ColorMode,
  DrawerProps,
  IconButtonProps,
  MenuProps,
  PopoverProps,
  UseDisclosureReturn,
} from "@yamada-ui/react"
import { Search, SearchButton } from "components/forms"
import {
  ColorPalette,
  Discord,
  Github,
  Hamburger,
  Moon,
  Sun,
  Translate,
} from "components/media-and-icons"
import { NextLinkIconButton, Tree } from "components/navigation"
import { CONSTANT } from "constant"
import { useI18n } from "contexts/i18n-context"
import { usePage } from "contexts/page-context"
import Link from "next/link"
import { useRouter } from "next/router"
import type { FC } from "react"
import { memo, useEffect, useRef, useState } from "react"

export type HeaderProps = CenterProps & {}

export const Header = memo(
  forwardRef<HeaderProps, "div">(({ ...rest }, ref) => {
    const { currentVersion } = usePage()
    const headerRef = useRef<HTMLHeadingElement>()
    const { scrollY } = useScroll()
    const [y, setY] = useState<number>(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { height = 0 } = headerRef.current?.getBoundingClientRect() ?? {}

    useMotionValueEvent(scrollY, "change", setY)

    const isScroll = y > height

    return (
      <>
        <Center
          ref={mergeRefs(ref, headerRef)}
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
              as={Link}
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

            <Tag
              display={{ base: "inline-flex", md: "none" }}
              colorScheme="gray"
              letterSpacing="1px"
              minW="auto"
            >
              {currentVersion}
            </Tag>

            <Spacer />

            <Search
              display={{ base: "flex", md: "none" }}
              borderColor={isScroll ? "transparent" : "border"}
              bg={
                isScroll
                  ? ["whiteAlpha.600", "blackAlpha.500"]
                  : ["white", "black"]
              }
              backdropFilter="auto"
              backdropSaturate="180%"
              backdropBlur="10px"
            />

            <ButtonGroup {...{ isOpen, onOpen }} />
          </HStack>
        </Center>

        <MobileMenu isOpen={isOpen} onClose={onClose} />
      </>
    )
  }),
)

type ButtonGroupProps = Partial<UseDisclosureReturn> & { isMobile?: boolean }

const ButtonGroup: FC<ButtonGroupProps> = memo(
  ({ isMobile, isOpen, onOpen, onClose }) => {
    return (
      <HStack gap="sm">
        <SearchButton
          display={{ base: "none", md: !isMobile ? "inline-flex" : undefined }}
        />

        <NextLinkIconButton
          href={CONSTANT.SNS.DISCORD}
          isExternal
          aria-label="GitHub repository"
          variant="ghost"
          display={{ base: "inline-flex", lg: !isMobile ? "none" : undefined }}
          color="muted"
          icon={<Discord />}
          _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
        />

        <NextLinkIconButton
          href={CONSTANT.SNS.GITHUB.YAMADA_UI}
          isExternal
          aria-label="Discord server"
          variant="ghost"
          display={{ base: "inline-flex", lg: !isMobile ? "none" : undefined }}
          color="muted"
          icon={<Github />}
          _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
        />

        <ThemeSchemeButton
          display={{ base: "inline-flex", lg: !isMobile ? "none" : undefined }}
        />

        {CONSTANT.I18N.LOCALES.length > 1 ? (
          <I18nButton
            display={{
              base: "inline-flex",
              md: !isMobile ? "none" : undefined,
            }}
          />
        ) : null}

        <ColorModeButton />

        {!isOpen ? (
          <IconButton
            variant="ghost"
            aria-label="Open navigation menu"
            display={{ base: "none", lg: "inline-flex" }}
            color="muted"
            onClick={onOpen}
            icon={<Hamburger />}
            _hover={{ bg: [`blackAlpha.50`, `whiteAlpha.100`] }}
          />
        ) : (
          <CloseButton
            size="lg"
            aria-label="Close navigation menu"
            display={{ base: "none", lg: "inline-flex" }}
            color="muted"
            onClick={onClose}
            _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
          />
        )}
      </HStack>
    )
  },
)

ButtonGroup.displayName = "ButtonGroup"

type I18nButtonProps = IconButtonProps & {
  menuProps?: MenuProps
}

const I18nButton: FC<I18nButtonProps> = memo(({ menuProps, ...rest }) => {
  const padding = useBreakpointValue({ base: 32, md: 16 })
  const { locale, changeLocale } = useI18n()

  return (
    <Menu
      placement="bottom"
      modifiers={[
        {
          name: "preventOverflow",
          options: {
            padding: {
              top: padding,
              bottom: padding,
              left: padding,
              right: padding,
            },
          },
        },
      ]}
      restoreFocus={false}
      {...menuProps}
    >
      <MenuButton
        as={IconButton}
        aria-label="Open language switching menu"
        variant="ghost"
        color="muted"
        icon={<Translate />}
        _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
        {...rest}
      />

      <MenuList>
        <MenuOptionGroup<string>
          value={locale}
          onChange={changeLocale}
          type="radio"
        >
          {CONSTANT.I18N.LOCALES.map(({ label, value }) => (
            <MenuOptionItem key={value} value={value} closeOnSelect>
              {label}
            </MenuOptionItem>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
})

I18nButton.displayName = "I18nButton"

type ColorModeButtonProps = IconButtonProps & {
  menuProps?: MenuProps
}

const ColorModeButton: FC<ColorModeButtonProps> = memo(
  ({ menuProps, ...rest }) => {
    const padding = useBreakpointValue({ base: 32, md: 16 })
    const { colorMode, internalColorMode, changeColorMode } = useColorMode()

    return (
      <Menu
        placement="bottom"
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: {
                top: padding,
                bottom: padding,
                left: padding,
                right: padding,
              },
            },
          },
        ]}
        restoreFocus={false}
        {...menuProps}
      >
        <MenuButton
          as={IconButton}
          aria-label="Open color mode switching menu"
          variant="ghost"
          color="muted"
          icon={colorMode === "dark" ? <Sun /> : <Moon />}
          _hover={{ bg: [`blackAlpha.100`, `whiteAlpha.50`] }}
          {...rest}
        />

        <MenuList>
          <MenuOptionGroup<ColorMode | "system">
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
        placement="bottom"
        closeOnButton={false}
        restoreFocus={false}
      >
        <PopoverTrigger>
          <IconButton
            aria-label="Open color mode switching menu"
            variant="ghost"
            color="muted"
            icon={<ColorPalette />}
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

type ColorButtonProps = BoxProps & {
  colorScheme: string
}

const ColorButton: FC<ColorButtonProps> = memo(({ colorScheme, ...rest }) => {
  const { onPointerDown, ...rippleProps } = useRipple({})

  return (
    <Box
      as="button"
      type="button"
      position="relative"
      overflow="hidden"
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
      {...rest}
      onPointerDown={onPointerDown}
    >
      <Ripple {...rippleProps} />
    </Box>
  )
})

ColorButton.displayName = "ColorButton"

type MobileMenuProps = DrawerProps

const MobileMenu: FC<MobileMenuProps> = memo(({ isOpen, onClose }) => {
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
      isOpen={isOpen}
      onClose={onClose}
      withCloseButton={false}
      isFullHeight
      w="auto"
    >
      <DrawerHeader
        justifyContent="flex-end"
        pt="sm"
        fontSize="md"
        fontWeight="normal"
      >
        <ButtonGroup isMobile {...{ isOpen, onClose }} />
      </DrawerHeader>

      <DrawerBody position="relative" my="sm">
        <VStack as="nav" overflowY="auto" overscrollBehavior="contain">
          <Tree py="sm" />
        </VStack>

        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="kurillin"
          w="full"
          h="3"
          bgGradient={[
            "linear(to-t, rgba(255, 255, 255, 0), white)",
            "linear(to-t, rgba(0, 0, 0, 0), black)",
          ]}
        />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          zIndex="kurillin"
          w="full"
          h="3"
          bgGradient={[
            "linear(to-b, rgba(255, 255, 255, 0), white)",
            "linear(to-b, rgba(0, 0, 0, 0), black)",
          ]}
        />
      </DrawerBody>
    </Drawer>
  )
})

MobileMenu.displayName = "MobileMenu"
