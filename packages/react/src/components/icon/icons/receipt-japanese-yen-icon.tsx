"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptJapaneseYen as OriginalReceiptJapaneseYenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReceiptJapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReceiptJapaneseYenIcon = component(Icon)({
  as: OriginalReceiptJapaneseYenIcon,
}) as Component<"svg", IconProps>
