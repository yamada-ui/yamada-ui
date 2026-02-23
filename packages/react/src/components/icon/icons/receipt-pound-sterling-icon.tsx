"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptPoundSterling as OriginalReceiptPoundSterlingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptPoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptPoundSterlingIcon = component(Icon)({
  as: OriginalReceiptPoundSterlingIcon,
}) as Component<"svg", IconProps>
