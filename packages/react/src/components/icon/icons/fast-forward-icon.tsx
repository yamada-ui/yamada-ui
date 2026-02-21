"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FastForward as OriginalFastForwardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FastForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FastForwardIcon = component(Icon)({
  as: OriginalFastForwardIcon,
}) as Component<"svg", IconProps>
