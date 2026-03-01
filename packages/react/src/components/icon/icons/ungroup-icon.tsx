"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ungroup as OriginalUngroupIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UngroupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UngroupIcon = component(Icon)({
  as: OriginalUngroupIcon,
}) as Component<"svg", IconProps>
