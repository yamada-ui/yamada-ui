import { Divider, HStack, VStack, assignRef, noop } from "@yamada-ui/react"
import { memo, useCallback, useRef, useState } from "react"
import type { FC, MutableRefObject } from "react"
import { Account } from "./account"
import { Appearance } from "./appearance"
import { Display } from "./display"
import { Header } from "./header"
import { Notifications } from "./notification"
import { Profile } from "./profile"
import { Sidebar } from "./sidebar"

export type FormType =
  | "profile"
  | "account"
  | "appearance"
  | "notifications"
  | "display"

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
      divider={<Divider />}
      borderBottomWidth="1px"
      p={{ base: "lg", sm: "md" }}
      gap={{ base: "lg", sm: "md" }}
    >
      <Header />

      <HStack
        flexDirection={{ base: "row", md: "column" }}
        alignItems="flex-start"
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
      return <></>
  }
}
