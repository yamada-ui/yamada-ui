"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Locate as OriginalLocateIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LocateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LocateIcon = component(Icon)({
  as: OriginalLocateIcon,
}) as Component<"svg", IconProps>
