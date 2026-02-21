"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { JapaneseYen as OriginalJapaneseYenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `JapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const JapaneseYenIcon = component(Icon)({
  as: OriginalJapaneseYenIcon,
}) as Component<"svg", IconProps>
