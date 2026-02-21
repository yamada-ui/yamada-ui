"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquarePlus as OriginalMessageSquarePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquarePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquarePlusIcon = component(Icon)({
  as: OriginalMessageSquarePlusIcon,
}) as Component<"svg", IconProps>
