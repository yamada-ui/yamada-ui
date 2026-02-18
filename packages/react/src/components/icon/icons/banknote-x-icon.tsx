"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BanknoteX as OriginalBanknoteXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BanknoteXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BanknoteXIcon = component(Icon)({
  as: OriginalBanknoteXIcon,
}) as Component<"svg", IconProps>
