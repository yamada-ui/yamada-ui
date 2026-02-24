"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCirclePlus as OriginalMessageCirclePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCirclePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCirclePlusIcon = component(Icon)({
  as: OriginalMessageCirclePlusIcon,
}) as Component<"svg", IconProps>
