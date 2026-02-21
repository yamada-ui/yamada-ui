"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptRussianRuble as OriginalReceiptRussianRubleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptRussianRubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptRussianRubleIcon = component(Icon)({
  as: OriginalReceiptRussianRubleIcon,
}) as Component<"svg", IconProps>
