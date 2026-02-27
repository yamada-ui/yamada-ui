"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailOpen as OriginalMailOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailOpenIcon = component(Icon)({
  as: OriginalMailOpenIcon,
}) as Component<"svg", IconProps>
