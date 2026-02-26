"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CopyCheck as OriginalCopyCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CopyCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CopyCheckIcon = component(Icon)({
  as: OriginalCopyCheckIcon,
}) as Component<"svg", IconProps>
