"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bitcoin as OriginalBitcoinIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BitcoinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BitcoinIcon = component(Icon)({
  as: OriginalBitcoinIcon,
}) as Component<"svg", IconProps>
