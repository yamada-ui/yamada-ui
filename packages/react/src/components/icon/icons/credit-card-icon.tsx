"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CreditCard as OriginalCreditCardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CreditCardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CreditCardIcon = component(Icon)({
  as: OriginalCreditCardIcon,
}) as Component<"svg", IconProps>
