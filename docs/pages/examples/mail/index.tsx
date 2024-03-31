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
import {
  type MailSidebarItemType,
  type MailType,
  mailSidebarItems,
  mails,
} from "./data"

export const Mail = memo(() => {
  const [isCollapse, { on, off }] = useBoolean()
  const [selectedMail, setSelectedMail] = useState<MailType>(mails[0])
  const [selectedTab, setSelectedTab] = useState<MailSidebarItemType>(
    mailSidebarItems[0][0],
  )

  console.log(selectedTab)

  return (
    <Resizable>
      <ResizableItem
        as={Box}
        defaultSize={17}
        collapsedSize={4}
        collapsible
        minSize={15}
        maxSize={22}
        onCollapse={() => {
          on()
        }}
        onExpand={() => {
          off()
        }}
      >
        <MailSidebar
          isCollapse={isCollapse}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </ResizableItem>
      <ResizableTrigger icon={<ResizableTriggerIcon />} />
      <ResizableItem as={Box} defaultSize={30} minSize={28}>
        <MailInbox
          mails={mails}
          selectedMail={selectedMail}
          setSelectedMail={setSelectedMail}
        />
      </ResizableItem>
      <ResizableTrigger icon={<ResizableTriggerIcon />} />
      <ResizableItem as={Box}>
        <MailDetail mail={selectedMail} />
      </ResizableItem>
    </Resizable>
  )
})

Mail.displayName = "Mail"
