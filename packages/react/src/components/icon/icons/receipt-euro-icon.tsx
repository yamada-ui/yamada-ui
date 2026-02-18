"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptEuro as OriginalReceiptEuroIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptEuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptEuroIcon = component(Icon)({
  as: OriginalReceiptEuroIcon,
}) as Component<"svg", IconProps>
