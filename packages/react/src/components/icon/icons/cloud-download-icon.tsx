"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudDownload as OriginalCloudDownloadIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudDownloadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudDownloadIcon = component(Icon)({
  as: OriginalCloudDownloadIcon,
}) as Component<"svg", IconProps>
