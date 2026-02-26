"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptTurkishLira as OriginalReceiptTurkishLiraIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptTurkishLiraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptTurkishLiraIcon = component(Icon)({
  as: OriginalReceiptTurkishLiraIcon,
}) as Component<"svg", IconProps>
