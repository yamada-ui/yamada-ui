"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Currency as OriginalCurrencyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CurrencyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CurrencyIcon = component(Icon)({
  as: OriginalCurrencyIcon,
}) as Component<"svg", IconProps>
