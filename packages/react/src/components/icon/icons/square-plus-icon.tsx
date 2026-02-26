"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePlus as OriginalSquarePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePlusIcon = component(Icon)({
  as: OriginalSquarePlusIcon,
}) as Component<"svg", IconProps>
