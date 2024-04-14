import {
  Divider,
  Resizable,
  ResizableItem,
  ResizableTrigger,
  VStack,
  noop,
  useBoolean,
} from "@yamada-ui/react"
import React, { memo, useRef } from "react"
import type { MailItem } from "./data"
import { DEFAULT_MAIL, MAILS } from "./data"
import { Detail } from "./detail"
import { Inbox } from "./inbox"
import { Sidebar } from "./sidebar"

export const Mail = memo(() => {
  const [isCollapse, { on, off }] = useBoolean()
  const setDesktopMailRef = useRef<(mail: MailItem) => void>(noop)
  const setMobileMailRef = useRef<(mail: MailItem) => void>(noop)

  return (
    <Resizable h={{ base: "5xl", sm: "6xl" }}>
      <ResizableItem
        defaultSize={20}
        collapsedSize={4}
        collapsible
        minSize={15}
        maxSize={20}
        minW="14"
        maxW={{ base: "64", xl: "14" }}
        onCollapse={on}
        onExpand={off}
      >
        <Sidebar isCollapse={isCollapse} />
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem>
        <Resizable display={{ base: "block", lg: "none" }}>
          <ResizableItem
            defaultSize={40}
            minSize={30}
            maxSize={50}
            minW={{ base: "md", lg: "inherit" }}
          >
            <Inbox
              defaultMail={DEFAULT_MAIL}
              mails={MAILS}
              setMailRef={setDesktopMailRef}
            />
          </ResizableItem>

          <ResizableTrigger />

          <ResizableItem defaultSize={60} minSize={50} maxSize={70}>
            <Detail defaultMail={DEFAULT_MAIL} setMailRef={setDesktopMailRef} />
          </ResizableItem>
        </Resizable>

        <VStack
          h="full"
          display={{ base: "none", lg: "flex" }}
          gap="0"
          divider={<Divider />}
        >
          <Inbox
            h={{ base: "full", lg: "28.8rem", sm: "27rem" }}
            defaultMail={DEFAULT_MAIL}
            mails={MAILS}
            setMailRef={setMobileMailRef}
          />

          <Detail defaultMail={DEFAULT_MAIL} setMailRef={setMobileMailRef} />
        </VStack>
      </ResizableItem>
    </Resizable>
  )
})

Mail.displayName = "Mail"
