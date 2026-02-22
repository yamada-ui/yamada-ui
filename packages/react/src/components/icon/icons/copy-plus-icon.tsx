"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CopyPlus as OriginalCopyPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CopyPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CopyPlusIcon = component(Icon)({
  as: OriginalCopyPlusIcon,
}) as Component<"svg", IconProps>
