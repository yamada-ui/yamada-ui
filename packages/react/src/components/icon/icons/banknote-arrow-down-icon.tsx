"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BanknoteArrowDown as OriginalBanknoteArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BanknoteArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BanknoteArrowDownIcon = component(Icon)({
  as: OriginalBanknoteArrowDownIcon,
}) as Component<"svg", IconProps>
