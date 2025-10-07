"use client"

import type { FC, RefObject } from "react"
import {
  assignRef,
  Card,
  HStack,
  noop,
  Separator,
  VStack,
} from "@yamada-ui/react"
import { memo, useCallback, useRef, useState } from "react"
import { Account } from "./account"
import { Appearance } from "./appearance"
import { Display } from "./display"
import { Header } from "./header"
import { Notifications } from "./notification"
import { Profile } from "./profile"
import { Sidebar } from "./sidebar"

export type FormType =
  | "account"
  | "appearance"
  | "display"
  | "notifications"
  | "profile"

export const DEFAULT_FORM_TYPE: FormType = "profile"

export const Forms = memo(() => {
  const setTypeRef = useRef<(type: FormType) => void>(noop)

  const onChangeType = useCallback(
    (type: FormType) => setTypeRef.current(type),
    [],
  )

  return (
    <Card.Root bg="bg.float">
      <VStack
        as="section"
        borderBottomWidth="1px"
        gap={{ base: "lg", sm: "md" }}
        p={{ base: "lg", sm: "md" }}
        separator={<Separator />}
      >
        <Header />

        <HStack
          alignItems="flex-start"
          flexDirection={{ base: "row", md: "column" }}
          gap={{ base: "lg", sm: "md" }}
        >
          <Sidebar onChangeType={onChangeType} />

          <Form setTypeRef={setTypeRef} />
        </HStack>
      </VStack>
    </Card.Root>
  )
})

Forms.displayName = "Forms"

interface FormProps {
  setTypeRef: RefObject<(type: FormType) => void>
}

export const Form: FC<FormProps> = ({ setTypeRef }) => {
  const [type, setType] = useState<FormType>(DEFAULT_FORM_TYPE)

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
