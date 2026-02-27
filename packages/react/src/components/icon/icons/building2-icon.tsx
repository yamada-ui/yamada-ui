"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Building2 as OriginalBuilding2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Building2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Building2Icon = component(Icon)({
  as: OriginalBuilding2Icon,
}) as Component<"svg", IconProps>
