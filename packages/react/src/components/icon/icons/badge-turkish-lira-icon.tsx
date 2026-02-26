"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeTurkishLira as OriginalBadgeTurkishLiraIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeTurkishLiraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeTurkishLiraIcon = component(Icon)({
  as: OriginalBadgeTurkishLiraIcon,
}) as Component<"svg", IconProps>
