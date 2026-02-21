"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BellPlus as OriginalBellPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BellPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BellPlusIcon = component(Icon)({
  as: OriginalBellPlusIcon,
}) as Component<"svg", IconProps>
