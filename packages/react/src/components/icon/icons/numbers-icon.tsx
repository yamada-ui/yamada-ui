"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Numbers as OriginalNumbersIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NumbersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NumbersIcon = component(Icon)({
  as: OriginalNumbersIcon,
}) as Component<"svg", IconProps>
