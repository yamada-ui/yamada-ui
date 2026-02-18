"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SmilePlus as OriginalSmilePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SmilePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SmilePlusIcon = component(Icon)({
  as: OriginalSmilePlusIcon,
}) as Component<"svg", IconProps>
