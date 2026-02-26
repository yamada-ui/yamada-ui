"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClosedCaption as OriginalClosedCaptionIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClosedCaptionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClosedCaptionIcon = component(Icon)({
  as: OriginalClosedCaptionIcon,
}) as Component<"svg", IconProps>
