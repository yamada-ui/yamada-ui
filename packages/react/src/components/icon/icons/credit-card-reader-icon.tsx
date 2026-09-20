"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CreditCardReader as OriginalCreditCardReaderIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CreditCardReaderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CreditCardReaderIcon = component(Icon)({
  as: OriginalCreditCardReaderIcon,
}) as Component<"svg", IconProps>
