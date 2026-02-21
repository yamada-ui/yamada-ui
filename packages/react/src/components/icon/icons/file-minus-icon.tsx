"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileMinus as OriginalFileMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileMinusIcon = component(Icon)({
  as: OriginalFileMinusIcon,
}) as Component<"svg", IconProps>
