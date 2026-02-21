"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BanknoteArrowUp as OriginalBanknoteArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BanknoteArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BanknoteArrowUpIcon = component(Icon)({
  as: OriginalBanknoteArrowUpIcon,
}) as Component<"svg", IconProps>
