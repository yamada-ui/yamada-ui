"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mail as OriginalMailIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailIcon = component(Icon)({ as: OriginalMailIcon }) as Component<
  "svg",
  IconProps
>
