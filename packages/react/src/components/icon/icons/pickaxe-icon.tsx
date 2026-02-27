"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pickaxe as OriginalPickaxeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PickaxeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PickaxeIcon = component(Icon)({
  as: OriginalPickaxeIcon,
}) as Component<"svg", IconProps>
