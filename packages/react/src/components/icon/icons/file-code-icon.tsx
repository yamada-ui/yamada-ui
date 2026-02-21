"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileCode as OriginalFileCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileCodeIcon = component(Icon)({
  as: OriginalFileCodeIcon,
}) as Component<"svg", IconProps>
