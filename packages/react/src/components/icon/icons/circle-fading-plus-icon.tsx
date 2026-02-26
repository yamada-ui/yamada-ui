"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleFadingPlus as OriginalCircleFadingPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleFadingPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleFadingPlusIcon = component(Icon)({
  as: OriginalCircleFadingPlusIcon,
}) as Component<"svg", IconProps>
