"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EmiratiDirham as OriginalEmiratiDirhamIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EmiratiDirhamIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EmiratiDirhamIcon = component(Icon)({
  as: OriginalEmiratiDirhamIcon,
}) as Component<"svg", IconProps>
