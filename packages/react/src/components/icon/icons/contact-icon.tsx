"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Contact as OriginalContactIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ContactIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ContactIcon = component(Icon)({
  as: OriginalContactIcon,
}) as Component<"svg", IconProps>
