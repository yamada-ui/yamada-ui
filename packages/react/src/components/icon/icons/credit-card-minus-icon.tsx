"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CreditCardMinus as OriginalCreditCardMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CreditCardMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CreditCardMinusIcon = component(Icon)({
  as: OriginalCreditCardMinusIcon,
}) as Component<"svg", IconProps>
