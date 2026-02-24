"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Videotape as OriginalVideotapeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VideotapeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VideotapeIcon = component(Icon)({
  as: OriginalVideotapeIcon,
}) as Component<"svg", IconProps>
