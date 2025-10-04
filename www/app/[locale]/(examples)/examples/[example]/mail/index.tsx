"use client"

import type { MailItem } from "./data"
import {
  Card,
  noop,
  Resizable,
  Separator,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { useRef } from "react"
import { DEFAULT_MAIL, MAILS } from "./data"
import { Detail } from "./detail"
import { Inbox } from "./inbox"
import { Sidebar } from "./sidebar"

export function Mail() {
  const [isCollapse, { off, on }] = useBoolean()
  const setDesktopMailRef = useRef<(mail: MailItem) => void>(noop)
  const setMobileMailRef = useRef<(mail: MailItem) => void>(noop)

  return (
    <Card.Root bg="bg.float">
      <Resizable.Root as="section" h={{ base: "5xl", sm: "6xl" }}>
        <Resizable.Item
          collapsedSize={4}
          collapsible
          defaultSize={20}
          maxSize={20}
          maxW={{ base: "64", xl: "14" }}
          minSize={15}
          minW="14"
          onCollapse={on}
          onExpand={off}
        >
          <Sidebar isCollapse={isCollapse} />
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root display={{ base: "block", lg: "none" }}>
            <Resizable.Item
              defaultSize={40}
              maxSize={50}
              minSize={30}
              minW={{ base: "md", lg: "inherit" }}
            >
              <Inbox
                defaultMail={DEFAULT_MAIL}
                mails={MAILS}
                setMailRef={setDesktopMailRef}
              />
            </Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item defaultSize={60} maxSize={70} minSize={50}>
              <Detail
                defaultMail={DEFAULT_MAIL}
                setMailRef={setDesktopMailRef}
              />
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
              h={{ base: "full", sm: "27rem", lg: "28.8rem" }}
              mails={MAILS}
              setMailRef={setMobileMailRef}
            />

            <Detail defaultMail={DEFAULT_MAIL} setMailRef={setMobileMailRef} />
          </VStack>
        </Resizable.Item>
      </Resizable.Root>
    </Card.Root>
  )
}
