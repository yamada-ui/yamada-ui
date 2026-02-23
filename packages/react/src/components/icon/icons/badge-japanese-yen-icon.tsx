"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeJapaneseYen as OriginalBadgeJapaneseYenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeJapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeJapaneseYenIcon = component(Icon)({
  as: OriginalBadgeJapaneseYenIcon,
}) as Component<"svg", IconProps>
