import type { FC, MutableRefObject } from "react"
import { assignRef, Divider, HStack, noop, VStack } from "@yamada-ui/react"
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
    <VStack
      as="section"
      borderBottomWidth="1px"
      divider={<Divider />}
      gap={{ base: "lg", sm: "md" }}
      p={{ base: "lg", sm: "md" }}
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
  )
})

Forms.displayName = "Forms"

interface FormProps {
  setTypeRef: MutableRefObject<(type: FormType) => void>
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
