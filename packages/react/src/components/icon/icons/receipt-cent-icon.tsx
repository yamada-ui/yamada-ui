"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptCent as OriginalReceiptCentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptCentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptCentIcon = component(Icon)({
  as: OriginalReceiptCentIcon,
}) as Component<"svg", IconProps>
