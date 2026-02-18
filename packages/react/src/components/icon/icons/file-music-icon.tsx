"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileMusic as OriginalFileMusicIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileMusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileMusicIcon = component(Icon)({
  as: OriginalFileMusicIcon,
}) as Component<"svg", IconProps>
