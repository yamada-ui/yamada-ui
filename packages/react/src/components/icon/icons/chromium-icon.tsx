"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Chromium as OriginalChromiumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChromiumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChromiumIcon = component(Icon)({
  as: OriginalChromiumIcon,
}) as Component<"svg", IconProps>
