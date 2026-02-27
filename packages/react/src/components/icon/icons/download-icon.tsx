"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Download as OriginalDownloadIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DownloadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DownloadIcon = component(Icon)({
  as: OriginalDownloadIcon,
}) as Component<"svg", IconProps>
