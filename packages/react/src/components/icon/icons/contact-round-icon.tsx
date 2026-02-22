"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ContactRound as OriginalContactRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ContactRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ContactRoundIcon = component(Icon)({
  as: OriginalContactRoundIcon,
}) as Component<"svg", IconProps>
