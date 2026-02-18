"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Squirrel as OriginalSquirrelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquirrelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquirrelIcon = component(Icon)({
  as: OriginalSquirrelIcon,
}) as Component<"svg", IconProps>
