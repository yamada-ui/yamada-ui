"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Inbox as OriginalInboxIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `InboxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const InboxIcon = component(Icon)({
  as: OriginalInboxIcon,
}) as Component<"svg", IconProps>
