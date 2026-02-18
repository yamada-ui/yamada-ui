"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptSwissFranc as OriginalReceiptSwissFrancIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptSwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptSwissFrancIcon = component(Icon)({
  as: OriginalReceiptSwissFrancIcon,
}) as Component<"svg", IconProps>
