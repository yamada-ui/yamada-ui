"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HardDriveUpload as OriginalHardDriveUploadIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HardDriveUploadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HardDriveUploadIcon = component(Icon)({
  as: OriginalHardDriveUploadIcon,
}) as Component<"svg", IconProps>
