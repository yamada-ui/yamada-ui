"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudBackup as OriginalCloudBackupIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudBackupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudBackupIcon = component(Icon)({
  as: OriginalCloudBackupIcon,
}) as Component<"svg", IconProps>
