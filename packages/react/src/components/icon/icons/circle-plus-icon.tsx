"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePlus as OriginalCirclePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CirclePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CirclePlusIcon = component(Icon)({
  as: OriginalCirclePlusIcon,
}) as Component<"svg", IconProps>
