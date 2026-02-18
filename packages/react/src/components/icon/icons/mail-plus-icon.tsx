"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailPlus as OriginalMailPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailPlusIcon = component(Icon)({
  as: OriginalMailPlusIcon,
}) as Component<"svg", IconProps>
