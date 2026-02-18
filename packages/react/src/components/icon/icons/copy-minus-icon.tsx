"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CopyMinus as OriginalCopyMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CopyMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CopyMinusIcon = component(Icon)({
  as: OriginalCopyMinusIcon,
}) as Component<"svg", IconProps>
