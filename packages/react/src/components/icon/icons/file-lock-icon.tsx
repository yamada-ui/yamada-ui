"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileLock as OriginalFileLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileLockIcon = component(Icon)({
  as: OriginalFileLockIcon,
}) as Component<"svg", IconProps>
