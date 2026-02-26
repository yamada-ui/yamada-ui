"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Asterisk as OriginalAsteriskIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AsteriskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AsteriskIcon = component(Icon)({
  as: OriginalAsteriskIcon,
}) as Component<"svg", IconProps>
