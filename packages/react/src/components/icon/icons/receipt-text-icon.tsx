"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptText as OriginalReceiptTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptTextIcon = component(Icon)({
  as: OriginalReceiptTextIcon,
}) as Component<"svg", IconProps>
