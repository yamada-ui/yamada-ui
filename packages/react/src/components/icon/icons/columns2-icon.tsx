"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Columns2 as OriginalColumns2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Columns2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Columns2Icon = component(Icon)({
  as: OriginalColumns2Icon,
}) as Component<"svg", IconProps>
