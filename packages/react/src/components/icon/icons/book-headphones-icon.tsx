"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookHeadphones as OriginalBookHeadphonesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookHeadphonesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookHeadphonesIcon = component(Icon)({
  as: OriginalBookHeadphonesIcon,
}) as Component<"svg", IconProps>
