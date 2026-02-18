"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mountain as OriginalMountainIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MountainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MountainIcon = component(Icon)({
  as: OriginalMountainIcon,
}) as Component<"svg", IconProps>
