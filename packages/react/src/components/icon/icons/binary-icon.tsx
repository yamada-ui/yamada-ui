"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Binary as OriginalBinaryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BinaryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BinaryIcon = component(Icon)({
  as: OriginalBinaryIcon,
}) as Component<"svg", IconProps>
