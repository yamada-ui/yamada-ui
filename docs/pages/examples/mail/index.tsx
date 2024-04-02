import {
  Box,
  Resizable,
  ResizableItem,
  ResizableTrigger,
  ResizableTriggerIcon,
  useBoolean,
} from "@yamada-ui/react"
import React, { memo, useState } from "react"
import { MailDetail } from "./MailDetail"
import { MailInbox } from "./MailInbox"
import { MailSidebar } from "./MailSidebar"
import { type MailType, mails } from "./data"

export const Mail = memo(() => {
  const [isCollapse, { on, off }] = useBoolean()
  const [selectedMail, setSelectedMail] = useState<MailType>(mails[0])

  return (
    <Resizable h="3xl">
      <ResizableItem
        as={Box}
        defaultSize={17}
        collapsedSize={4}
        collapsible
        minSize={15}
        maxSize={22}
        overflow="hidden"
        onCollapse={() => {
          on()
        }}
        onExpand={() => {
          off()
        }}
      >
        <MailSidebar isCollapse={isCollapse} />
      </ResizableItem>
      <ResizableTrigger icon={<ResizableTriggerIcon />} />
      <ResizableItem as={Box} defaultSize={30} minSize={28} overflow="hidden">
        <MailInbox
          mails={mails}
          selectedMail={selectedMail}
          setSelectedMail={setSelectedMail}
        />
      </ResizableItem>
      <ResizableTrigger icon={<ResizableTriggerIcon />} />
      <ResizableItem as={Box} minSize={40} overflow="hidden">
        <MailDetail mail={selectedMail} />
      </ResizableItem>
    </Resizable>
  )
})

Mail.displayName = "Mail"
