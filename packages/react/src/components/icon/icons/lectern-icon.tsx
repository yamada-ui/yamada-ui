"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lectern as OriginalLecternIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LecternIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LecternIcon = component(Icon)({
  as: OriginalLecternIcon,
}) as Component<"svg", IconProps>
