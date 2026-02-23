"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudUpload as OriginalCloudUploadIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudUploadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudUploadIcon = component(Icon)({
  as: OriginalCloudUploadIcon,
}) as Component<"svg", IconProps>
