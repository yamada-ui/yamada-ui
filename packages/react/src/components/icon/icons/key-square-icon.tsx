"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { KeySquare as OriginalKeySquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KeySquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KeySquareIcon = component(Icon)({
  as: OriginalKeySquareIcon,
}) as Component<"svg", IconProps>
