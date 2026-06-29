"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BanknoteCheck as OriginalBanknoteCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BanknoteCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BanknoteCheckIcon = component(Icon)({
  as: OriginalBanknoteCheckIcon,
}) as Component<"svg", IconProps>
