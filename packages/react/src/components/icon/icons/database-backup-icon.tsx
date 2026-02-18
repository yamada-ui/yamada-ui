"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseBackup as OriginalDatabaseBackupIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseBackupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseBackupIcon = component(Icon)({
  as: OriginalDatabaseBackupIcon,
}) as Component<"svg", IconProps>
