"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClefAlto as OriginalClefAltoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClefAltoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClefAltoIcon = component(Icon)({
  as: OriginalClefAltoIcon,
}) as Component<"svg", IconProps>
