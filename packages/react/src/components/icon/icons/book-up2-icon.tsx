"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookUp2 as OriginalBookUp2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookUp2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookUp2Icon = component(Icon)({
  as: OriginalBookUp2Icon,
}) as Component<"svg", IconProps>
