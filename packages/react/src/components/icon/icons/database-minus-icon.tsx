"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseMinus as OriginalDatabaseMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseMinusIcon = component(Icon)({
  as: OriginalDatabaseMinusIcon,
}) as Component<"svg", IconProps>
