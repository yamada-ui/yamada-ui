"use client"

import type { MailItem } from "./data"
import {
  noop,
  Resizable,
  Separator,
  useBreakpointEffect,
  VStack,
} from "@yamada-ui/react"
import { useRef, useState } from "react"
import { DEFAULT_MAIL, MAILS } from "./data"
import { Detail } from "./detail"
import { Inbox } from "./inbox"
import { Sidebar } from "./sidebar"

export function Mail() {
  const controlRef = useRef<Resizable.ItemControl>(null)
  const [collapsible, setCollapsible] = useState(false)
  const setDesktopMailRef = useRef<(mail: MailItem) => void>(noop)
  const setMobileMailRef = useRef<(mail: MailItem) => void>(noop)

  useBreakpointEffect((breakpoint) => {
    if (["2xl", "base"].includes(breakpoint)) {
      setCollapsible(true)
    } else {
      setCollapsible(false)
      controlRef.current?.collapse()
    }
  }, [])

  return (
    <Resizable.Root layerStyle="card" h={{ base: "5xl", sm: "6xl" }}>
      <Resizable.Item
        collapsedSize={52}
        collapsible
        containerType="size"
        controlRef={controlRef}
        defaultSize={52}
        maxSize="20%"
        minSize="15%"
      >
        <Sidebar />
      </Resizable.Item>

      <Resizable.Trigger
        disabled={!collapsible}
        _disabled={{ cursor: "auto!" }}
      />

      <Resizable.Item>
        <Resizable.Root display={{ base: "flex", lg: "none!" }}>
          <Resizable.Item defaultSize="40%" maxSize="50%" minSize="30%">
            <Inbox
              defaultMail={DEFAULT_MAIL}
              mails={MAILS}
              setMailRef={setDesktopMailRef}
            />
          </Resizable.Item>

          <Resizable.Trigger />

          <Resizable.Item defaultSize="60%" maxSize="70%" minSize="50%">
            <Detail defaultMail={DEFAULT_MAIL} setMailRef={setDesktopMailRef} />
          </Resizable.Item>
        </Resizable.Root>

        <VStack
          display={{ base: "none", lg: "flex" }}
          gap="0"
          h="full"
          separator={<Separator />}
        >
          <Inbox
            defaultMail={DEFAULT_MAIL}
            h={{ base: "full", sm: "23.7rem", lg: "25rem" }}
            mails={MAILS}
            setMailRef={setMobileMailRef}
          />

          <Detail defaultMail={DEFAULT_MAIL} setMailRef={setMobileMailRef} />
        </VStack>
      </Resizable.Item>
    </Resizable.Root>
  )
}
