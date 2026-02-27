"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Package2 as OriginalPackage2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Package2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Package2Icon = component(Icon)({
  as: OriginalPackage2Icon,
}) as Component<"svg", IconProps>
