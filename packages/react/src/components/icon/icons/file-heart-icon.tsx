"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileHeart as OriginalFileHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileHeartIcon = component(Icon)({
  as: OriginalFileHeartIcon,
}) as Component<"svg", IconProps>
