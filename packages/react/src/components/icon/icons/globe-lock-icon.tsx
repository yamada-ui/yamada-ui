"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GlobeLock as OriginalGlobeLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlobeLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlobeLockIcon = component(Icon)({
  as: OriginalGlobeLockIcon,
}) as Component<"svg", IconProps>
