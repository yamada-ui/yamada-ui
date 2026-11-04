"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CreditCardPlus as OriginalCreditCardPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CreditCardPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CreditCardPlusIcon = component(Icon)({
  as: OriginalCreditCardPlusIcon,
}) as Component<"svg", IconProps>
