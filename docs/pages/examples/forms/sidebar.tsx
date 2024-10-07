import type { BoxProps, ButtonProps, StackProps } from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import type { FormType } from "."
import { Box, Button, handlerAll, useBoolean, VStack } from "@yamada-ui/react"
import { memo, useRef } from "react"
import { DEFAULT_FORM_TYPE } from "."

const SIDEBAR_MENU: FormType[] = [
  "profile",
  "account",
  "appearance",
  "notifications",
  "display",
]

export interface MenuProps extends StackProps {
  onChangeType: (type: FormType) => void
  containerProps?: BoxProps
}

export const Sidebar: FC<MenuProps> = memo(
  ({ containerProps, onChangeType, ...rest }) => {
    const resetMapRef = useRef<Map<FormType, () => void>>(new Map())

    return (
      <Box as="aside" w={{ base: "xs", md: "full" }} {...containerProps}>
        <Box as="nav">
          <VStack
            as="ul"
            flexDirection={{ base: "column", md: "row" }}
            gap="sm"
            overflowX="auto"
            {...rest}
          >
            {SIDEBAR_MENU.map((label) => (
              <Box key={label} as="li">
                <SidebarButton
                  label={label}
                  resetMapRef={resetMapRef}
                  onClick={() => onChangeType(label)}
                />
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    )
  },
)

Sidebar.displayName = "Sidebar"

export interface SidebarButtonProps extends ButtonProps {
  label: FormType
  resetMapRef: MutableRefObject<Map<FormType, () => void>>
}

export const SidebarButton: FC<SidebarButtonProps> = memo(
  ({ label, resetMapRef, onClick, ...rest }) => {
    const [isSelected, { off, on }] = useBoolean(label === DEFAULT_FORM_TYPE)

    resetMapRef.current.set(label, off)

    const reset = () => {
      for (const [resetLabel, func] of resetMapRef.current.entries()) {
        if (label !== resetLabel) func()
      }
    }

    return (
      <Button
        colorScheme="gray"
        variant={isSelected ? "solid" : "ghost"}
        fontWeight="normal"
        justifyContent="flex-start"
        w="full"
        _hover={isSelected ? {} : undefined}
        onClick={handlerAll(onClick, on, reset)}
        {...rest}
      >
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Button>
    )
  },
)

SidebarButton.displayName = "SidebarButton"
