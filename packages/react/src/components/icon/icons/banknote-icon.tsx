"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Banknote as OriginalBanknoteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BanknoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BanknoteIcon = component(Icon)({
  as: OriginalBanknoteIcon,
}) as Component<"svg", IconProps>
