"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LocateOff as OriginalLocateOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LocateOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LocateOffIcon = component(Icon)({
  as: OriginalLocateOffIcon,
}) as Component<"svg", IconProps>
