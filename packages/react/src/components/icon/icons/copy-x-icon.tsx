"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CopyX as OriginalCopyXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CopyXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CopyXIcon = component(Icon)({
  as: OriginalCopyXIcon,
}) as Component<"svg", IconProps>
