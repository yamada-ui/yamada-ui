"use client"

import type { ButtonProps, StackProps } from "@yamada-ui/react"
import type { RefObject } from "react"
import {
  assignRef,
  Box,
  Button,
  HStack,
  noop,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { handlerAll } from "@yamada-ui/utils"
import { useCallback, useRef, useState } from "react"
import { Account } from "./account"
import { Appearance } from "./appearance"
import { Display } from "./display"
import { Notifications } from "./notification"
import { Profile } from "./profile"

export type Type =
  | "account"
  | "appearance"
  | "display"
  | "notifications"
  | "profile"

const SIDEBAR_MENU: Type[] = [
  "profile",
  "account",
  "appearance",
  "notifications",
  "display",
]

export const DEFAULT_FORM_TYPE: Type = "profile"

export function Body() {
  const setTypeRef = useRef<(type: Type) => void>(noop)

  const onChangeType = useCallback((type: Type) => setTypeRef.current(type), [])

  return (
    <HStack
      alignItems="flex-start"
      flexDirection={{ base: "row", md: "column" }}
      gap="{space}"
    >
      <Sidebar onChangeType={onChangeType} />

      <Content setTypeRef={setTypeRef} />
    </HStack>
  )
}

interface SidebarProps extends StackProps {
  onChangeType: (type: Type) => void
}

function Sidebar({ onChangeType, ...rest }: SidebarProps) {
  const resetMapRef = useRef<Map<Type, () => void>>(new Map())

  return (
    <Box as="aside" w={{ base: "xs", md: "full" }}>
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
}

interface SidebarButtonProps extends ButtonProps {
  label: Type
  resetMapRef: RefObject<Map<Type, () => void>>
}

function SidebarButton({
  label,
  resetMapRef,
  onClick,
  ...rest
}: SidebarButtonProps) {
  const [selected, { off, on }] = useBoolean(label === DEFAULT_FORM_TYPE)

  resetMapRef.current.set(label, off)

  const reset = () => {
    for (const [resetLabel, func] of resetMapRef.current.entries()) {
      if (label !== resetLabel) func()
    }
  }

  return (
    <Button
      variant={selected ? "solid" : "ghost"}
      justifyContent="flex-start"
      w="full"
      onClick={handlerAll(onClick, on, reset)}
      {...rest}
    >
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </Button>
  )
}

interface ContentProps {
  setTypeRef: RefObject<(type: Type) => void>
}

function Content({ setTypeRef }: ContentProps) {
  const [type, setType] = useState<Type>(DEFAULT_FORM_TYPE)

  assignRef(setTypeRef, setType)

  switch (type) {
    case "profile":
      return <Profile />
    case "account":
      return <Account />
    case "appearance":
      return <Appearance />
    case "notifications":
      return <Notifications />
    case "display":
      return <Display />
    default:
      return null
  }
}
