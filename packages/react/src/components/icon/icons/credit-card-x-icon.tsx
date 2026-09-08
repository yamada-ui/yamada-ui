"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CreditCardX as OriginalCreditCardXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CreditCardXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CreditCardXIcon = component(Icon)({
  as: OriginalCreditCardXIcon,
}) as Component<"svg", IconProps>
