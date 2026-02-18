"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareLock as OriginalMessageSquareLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareLockIcon = component(Icon)({
  as: OriginalMessageSquareLockIcon,
}) as Component<"svg", IconProps>
