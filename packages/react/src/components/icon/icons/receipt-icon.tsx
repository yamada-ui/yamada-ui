"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Receipt as OriginalReceiptIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptIcon = component(Icon)({
  as: OriginalReceiptIcon,
}) as Component<"svg", IconProps>
