"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailSearch as OriginalMailSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailSearchIcon = component(Icon)({
  as: OriginalMailSearchIcon,
}) as Component<"svg", IconProps>
