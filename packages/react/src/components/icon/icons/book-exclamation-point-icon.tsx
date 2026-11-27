"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookExclamationPoint as OriginalBookExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookExclamationPointIcon = component(Icon)({
  as: OriginalBookExclamationPointIcon,
}) as Component<"svg", IconProps>
