"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rows2 as OriginalRows2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Rows2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Rows2Icon = component(Icon)({
  as: OriginalRows2Icon,
}) as Component<"svg", IconProps>
